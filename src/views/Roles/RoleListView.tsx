import type { IRole } from '@/models/role.model';
import { useRoleService } from '@/services/role.service';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import RoleForm from '../../components/customer/CustomerForm';
const Roles = () => {
  const roleService = useRoleService();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { data: rolesData, refetch: refetchRoles, isFetching: isFetchingRoles } = roleService.useGetRoles();
  const createRoleMutation = roleService.useCreateRole();

  const onOk = async (values: IRole.Create.Req) => {
    try {
      await createRoleMutation.mutateAsync(values);
      await refetchRoles();
      setOpen(false);
    } catch (error) {
      console.error('Failed to create role:', error);
    }
  };
  const columns: ColumnsType<IRole.GetList.Res> = [
    {
      title: t('role.fields.id'),
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: t('role.fields.label'),
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: t('role.fields.value'),
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: t('role.fields.createdAt'),
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: t('role.fields.updatedAt'),
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    },
  ];

  const [_roles,setRoles] = useState<IRole.GetList.Res>([])


  useEffect(()=>{
    setRoles([...rolesData?.data!]);
  },[rolesData])
  


  return (
    <>
      <Card
        title={t('role.page.title')}
        extra={
          <>
            <Button type='primary' ghost icon={<PlusOutlined />} className='flex! items-center justify-center' onClick={() => setOpen(true)}>
              {t('role.actions.create')}
            </Button>
            <Button type='primary' ghost icon={<PlusOutlined />} className='flex! items-center justify-center' onClick={() => setOpen(true)}>
              {t('role.actions.create')}
            </Button>
          </>
        }
      >
        <RoleForm open={open} setOpen={(opn: boolean) => setOpen(opn)} onOk={onOk} isLoading={createRoleMutation.isPending} />
        <Table<IRole.GetList.Res> dataSource={[]} columns={columns} rowKey='id' loading={isFetchingRoles} />
      </Card>
    </>
  );
};

export default Roles;
