import type { Role } from '@/models/role.model';
import type { IUser, User } from '@/models/user.model';
import { useUserService } from '@/services/user.service';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Switch, Table, Tag, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import UserForm from '../../components/Form.component';

const userService = useUserService();
const Users = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const {
    data: usersData,
    refetch: refetchUsers,
    isFetching: isFetchingUsers,
  } = userService.useGetUserList();
  const createUserMutation = userService.useCreateUser();
  const editApproveUserByAdminMutation =
    userService.useEditApproveUserByAdmin();
  // Try different possible data structures
  let users: User[] = [];
  if (usersData?.data) {
    // Check if data is directly an array (like roles)
    if (Array.isArray(usersData.data)) {
      users = usersData.data;
    }
    // Check if data has a users property
    else if (
      usersData.data &&
      typeof usersData.data === 'object' &&
      'users' in usersData.data
    ) {
      users = usersData.data || [];
    }
  }

  useEffect(() => {}, [users, usersData]);

  const onOk = async (values: IUser.Create.Req) => {
    try {
      await createUserMutation.mutateAsync(values);
      await refetchUsers();
      setOpen(false);
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };
  const onApproveChange = async (
    approvedByAdmin: boolean,
    username: User['username'],
  ) => {
    await editApproveUserByAdminMutation.mutateAsync({
      username,
      approvedByAdmin,
    });
    await refetchUsers();
  };
  const [editUser, setEditUser] = useState<User>({} as User);
  const onEditUser = (record: User) => {
    console.log('🚀 ~ onEditUser ~ record:', record);
    setEditUser(record);
  };
  const columns: ColumnsType<User> = [
    {
      title: t('user.fields.id'),
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: t('user.fields.username'),
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: t('user.fields.roles'),
      dataIndex: 'roles',
      key: 'roles',
      render: (roles: Role['value'][]) => {
        return (
          roles?.map((role, index) => (
            <Tag key={`${role}-${index}`} color='blue'>
              {role}
            </Tag>
          )) || []
        );
      },
    },
    {
      title: t('user.fields.approved'),
      dataIndex: 'approvedByAdmin',
      key: 'approvedByAdmin',
      render: (approved: boolean, record: User) => {
        return (
          <Switch
            checked={approved}
            onChange={($event) => onApproveChange($event, record['username'])}
            loading={
              editApproveUserByAdminMutation.isPending &&
              editApproveUserByAdminMutation.variables?.username ===
                record['username']
            }
            checkedChildren={t('user.states.active')}
            unCheckedChildren={t('user.states.inactive')}
          />
        );
      },
    },
    {
      title: t('user.fields.createdAt'),
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: t('user.fields.updatedAt'),
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    },
    {
      title: t('user.fields.action'),
      dataIndex: 'action',
      key: 'action',
      render: (record: User) => {
        return (
          <>
            <Tooltip title={t('user.actions.edit')}>
              <Button
                type='link'
                icon={<EditOutlined />}
                onClick={() => onEditUser(record)}
              />
            </Tooltip>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Card
        title={t('user.page.title')}
        extra={
          <Button
            type='primary'
            ghost
            icon={<PlusOutlined />}
            className='flex! items-center justify-center'
            onClick={() => setOpen(true)}
          >
            {t('user.actions.create')}
          </Button>
        }
      >
        <UserForm
          user={editUser}
          open={open}
          setOpen={(opn: boolean) => setOpen(opn)}
          onOk={onOk}
          isLoading={createUserMutation.isPending}
        />
        <Table<User>
          dataSource={users}
          columns={columns}
          rowKey='id'
          loading={isFetchingUsers}
        />
      </Card>
    </>
  );
};

export default Users;
