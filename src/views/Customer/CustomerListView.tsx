import { useCustomerService } from '@/services/customer.service';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Descriptions, Divider, Form, Input } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ICustomer } from '../../models/customer.model';

const Customers = () => {
  const customerService = useCustomerService();
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useState<ICustomer.GetCustomer.Req | null>(null);

  const { data: customerData, isFetching: isFetchingCustomer } = customerService.getCustomer(searchParams as ICustomer.GetCustomer.Req, { enabled: !!searchParams });

  const handleSearchCustomer = (values: ICustomer.GetCustomer.Req) => {
    setSearchParams(values);
  };

  return (
    <>
      <Card
        title={t('customer.page.title')}
        extra={
          <Button type='primary' ghost icon={<PlusOutlined />} className='flex! items-center justify-center'>
            {t('customer.actions.create')}
          </Button>
        }
      >
        <Form layout='inline' className='gap-4' onFinish={handleSearchCustomer}>
          <Form.Item name='firstName' label={t('customer.fields.firstName')}>
            <Input />
          </Form.Item>
          <Form.Item name='lastName' label={t('customer.fields.lastName')}>
            <Input />
          </Form.Item>
          <Form.Item name='fatherName' label={t('customer.fields.fatherName')}>
            <Input />
          </Form.Item>
          <Form.Item name='birthCertificateNumber' label={t('customer.fields.birthCertificateNumber')}>
            <Input />
          </Form.Item>
          <Form.Item name='customerNo' label={t('customer.fields.customerNo')}>
            <Input />
          </Form.Item>
          <Form.Item name='nationalID' label={t('customer.fields.nationalID')}>
            <Input />
          </Form.Item>
          <Form.Item name='fullName' label={t('customer.fields.fullName')}>
            <Input />
          </Form.Item>
          <Form.Item name='mobileNumber' label={t('customer.fields.mobileNumber')}>
            <Input />
          </Form.Item>
          <Form.Item name='accountNumber' label={t('customer.fields.accountNumber')}>
            <Input />
          </Form.Item>
          <Form.Item name='cardNumber' label={t('customer.fields.cardNumber')}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' loading={isFetchingCustomer}>
              {t('customer.actions.search')}
            </Button>
          </Form.Item>
        </Form>
        <Divider />
        <Descriptions title={t('customer.messages.customerInfo')} layout='vertical' className='mt-4'>
          <Descriptions.Item label={t('customer.fields.firstName')}>{customerData?.data?.firstName}</Descriptions.Item>
          <Descriptions.Item label={t('customer.fields.lastName')}>{customerData?.data?.lastName}</Descriptions.Item>
          <Descriptions.Item label={t('customer.fields.fatherName')}>{customerData?.data?.fatherName}</Descriptions.Item>
          <Descriptions.Item label={t('customer.fields.birthCertificateNumber')}>{customerData?.data?.birthCertificateNumber}</Descriptions.Item>
          <Descriptions.Item label={t('customer.fields.customerNo')}>{customerData?.data?.customerNo}</Descriptions.Item>
          <Descriptions.Item label={t('customer.fields.nationalID')}>{customerData?.data?.nationalID}</Descriptions.Item>
          <Descriptions.Item label={t('customer.fields.fullName')}>{customerData?.data?.fullName}</Descriptions.Item>
          <Descriptions.Item label={t('customer.fields.mobileNumber')}>{customerData?.data?.mobileNumber}</Descriptions.Item>
          <Descriptions.Item label={t('customer.fields.accountNumber')}>{customerData?.data?.countOfActiveAccount}</Descriptions.Item>
        </Descriptions>
      </Card>
    </>
  );
};

export default Customers;
