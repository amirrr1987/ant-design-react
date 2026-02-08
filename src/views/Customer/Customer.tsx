import type { CustomerGenderType } from '@/types/customer.type';
import { EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Form, Space, Table, Tag } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { Group } from 'antd/es/radio';
import Radio from 'antd/es/radio/radio';
import type { ColumnsType } from 'antd/es/table';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ICustomer } from '../../models/customer.model';
import WidthMobile from './WidthMobile';
import WidthNatinalCode from './WidthNatinalCode';

type TableCustomer = ICustomer.GetCustomerInfoWithNationalCode.Res[number] | ICustomer.GetCustomerInfoWithMobile.Res[number];

const Customers = () => {
  const { t } = useTranslation();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [searchType, setSearchType] = useState<'mobile' | 'natinalCode' | undefined>();
  const [customers, setCustomers] = useState<ICustomer.GetCustomerInfoWithMobile.Res | ICustomer.GetCustomerInfoWithNationalCode.Res>([]);

  const columns: ColumnsType<TableCustomer> = useMemo(
    () => [
      {
        title: t('customer.fields.nationalID'),
        dataIndex: 'nationalID',
        key: 'nationalID',
      },
      {
        title: t('customer.fields.firstName'),
        dataIndex: 'firstName',
        key: 'firstName',
      },
      {
        title: t('customer.fields.lastName'),
        dataIndex: 'lastName',
        key: 'lastName',
      },
      {
        title: t('customer.fields.fatherName'),
        dataIndex: 'fatherName',
        key: 'fatherName',
      },
      {
        title: t('customer.fields.mobileNumber'),
        dataIndex: 'mobileNumber',
        key: 'mobileNumber',
      },
      {
        title: t('customer.fields.gender'),
        dataIndex: 'gender',
        key: 'gender',
        render: (text: CustomerGenderType) => <Tag color='blue'>{text === 'M' ? t('customer.states.male') : t('customer.states.female')}</Tag>,
      },
      {
        title: t('customer.fields.birthDate'),
        dataIndex: 'birthDate',
        key: 'birthDate',
      },
      {
        title: t('customer.fields.customerNo'),
        dataIndex: 'customerNo',
        key: 'customerNo',
      },
      {
        title: t('customer.fields.actions'),
        dataIndex: 'actions',
        key: 'actions',
        render: (_text: string, _record: TableCustomer) => (
          <Space>
            <Button type='link' icon={<EyeOutlined />} />
          </Space>
        ),
      },
    ],
    [t],
  );

  return (
    <>
      <Card
        title={t('customer.page.titleWithMobile')}
        extra={
          <Button type='primary' ghost icon={<PlusOutlined />} className='flex! items-center justify-center'>
            {t('customer.actions.createWithMobile')}
          </Button>
        }
      >
        <Form layout='horizontal'>
          <FormItem label="جستجو بر اساس">
            <Group value={searchType} onChange={(e) => setSearchType(e.target.value)}>
              <Radio value='mobile'>موبایل</Radio>
              <Radio value='natinalCode'>شماره ملی</Radio>
            </Group>
          </FormItem>
        </Form>

        {searchType == 'mobile' && <WidthMobile setCustomers={setCustomers} setIsFetching={setIsFetching} />}

        {searchType == 'natinalCode' && <WidthNatinalCode setCustomers={setCustomers} setIsFetching={setIsFetching} />}

        <Divider />
        <Table<TableCustomer> dataSource={customers} columns={columns} rowKey={(record) => record.customerNo || record.mobileNumber} loading={isFetching} />
      </Card>
    </>
  );
};

export default Customers;
