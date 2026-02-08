import { PersonTypeList } from '@/constants/customer.constant';
import type { IAccount } from '@/models/account.model';
import { useAccountService } from '@/services/account.service';
import { Button, Card, Select, Table } from 'antd';
import Form from 'antd/es/form/Form';
import FormItem from 'antd/es/form/FormItem';
import Input from 'antd/es/input/Input';
import type { ColumnsType } from 'antd/es/table';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
const AccountInfo = () => {
  const accountService = useAccountService();
  const { t } = useTranslation();

  const { mutateAsync, isPending } = accountService.useGetAccountInfoByAccountNo();
  const [accountInfoList, setAccountInfoList] = useState<IAccount.GetAccountInfoByAccountNo.Res>([]);
  const onFinish = async (values: IAccount.GetAccountInfoByAccountNo.Req) => {
    const { data } = await mutateAsync(values);
    setAccountInfoList(data!);
  };
  const columns: ColumnsType<IAccount.GetAccountInfoByAccountNo.Res[0]> = useMemo(
    () => [
      {
        title: t('accountInfo.fields.nationalCode'),
        dataIndex: 'nationalCode',
        key: 'nationalCode',
      },
      {
        title: t('accountInfo.fields.idType'),
        dataIndex: 'idType',
        key: 'idType',
      },
      {
        title: t('accountInfo.fields.shahabNumber'),
        dataIndex: 'shahabNumber',
        key: 'shahabNumber',
      },
      {
        title: t('accountInfo.fields.identityIssueDate'),
        dataIndex: 'identityIssueDate',
        key: 'identityIssueDate',
      },
      {
        title: t('accountInfo.fields.identityPlace'),
        dataIndex: 'identityPlace',
        key: 'identityPlace',
      },
      {
        title: t('accountInfo.fields.customerNumber'),
        dataIndex: 'customerNumber',
        key: 'customerNumber',
      },
      {
        title: t('accountInfo.fields.cusotmerStatus'),
        dataIndex: 'cusotmerStatus',
        key: 'cusotmerStatus',
      },
      {
        title: t('accountInfo.fields.customerType'),
        dataIndex: 'customerType',
        key: 'customerType',
      },

      {
        title: t('accountInfo.fields.provinceCode'),
        dataIndex: 'provinceCode',
        key: 'provinceCode',
      },
      {
        title: t('accountInfo.fields.postalCode'),
        dataIndex: 'postalCode',
        key: 'postalCode',
      },

      {
        title: t('accountInfo.fields.address'),
        dataIndex: 'address',
        key: 'address',
        with: 400,
      },
      {
        title: t('accountInfo.fields.customerCellNo'),
        dataIndex: 'customerCellNo',
        key: 'customerCellNo',
      },
      {
        title: t('accountInfo.fields.firstName'),
        dataIndex: 'firstName',
        key: 'firstName',
      },
      {
        title: t('accountInfo.fields.lastName'),
        dataIndex: 'lastName',
        key: 'lastName',
      },
      {
        title: t('accountInfo.fields.fatherName'),
        dataIndex: 'fatherName',
        key: 'fatherName',
      },
      {
        title: t('accountInfo.fields.certificateId'),
        dataIndex: 'certificateId',
        key: 'certificateId',
      },
      {
        title: t('accountInfo.fields.companyRegId'),
        dataIndex: 'companyRegId',
        key: 'companyRegId',
      },
      {
        title: t('accountInfo.fields.gender'),
        dataIndex: 'gender',
        key: 'gender',
      },
      {
        title: t('accountInfo.fields.birthDate'),
        dataIndex: 'birthDate',
        key: 'birthDate',
      },
      {
        title: t('accountInfo.fields.email1'),
        dataIndex: 'email1',
        key: 'email1',
      },
      {
        title: t('accountInfo.fields.email2'),
        dataIndex: 'email2',
        key: 'email2',
      },
      {
        title: t('accountInfo.fields.accountNumber'),
        dataIndex: 'accountNumber',
        key: 'accountNumber',
      },
      {
        title: t('accountInfo.fields.currency'),
        dataIndex: 'currency',
        key: 'currency',
      },
      {
        title: t('accountInfo.fields.currentBalance'),
        dataIndex: 'currentBalance',
        key: 'currentBalance',
      },
      {
        title: t('accountInfo.fields.accountStopsCount'),
        dataIndex: 'accountStopsCount',
        key: 'accountStopsCount',
      },
      {
        title: t('accountInfo.fields.accountWithdrawalStopCount'),
        dataIndex: 'accountWithdrawalStopCount',
        key: 'accountWithdrawalStopCount',
      },
      {
        title: t('accountInfo.fields.accountHoldcount'),
        dataIndex: 'accountHoldcount',
        key: 'accountHoldcount',
      },
      {
        title: t('accountInfo.fields.availableBalance'),
        dataIndex: 'availableBalance',
        key: 'availableBalance',
      },
      {
        title: t('accountInfo.fields.branchNo'),
        dataIndex: 'branchNo',
        key: 'branchNo',
      },
      {
        title: t('accountInfo.fields.currentStatus'),
        dataIndex: 'currentStatus',
        key: 'currentStatus',
      },
      {
        title: t('accountInfo.fields.accountHoldcount'),
        dataIndex: 'accountHoldcount',
        key: 'accountHoldcount',
      },
      {
        title: t('accountInfo.fields.accountStatus'),
        dataIndex: 'accountStatus',
        key: 'accountStatus',
      },
      {
        title: t('accountInfo.fields.accountType'),
        dataIndex: 'accountType',
        key: 'accountType',
      },
      {
        title: t('accountInfo.fields.intCat'),
        dataIndex: 'intCat',
        key: 'intCat',
      },
      {
        title: t('accountInfo.fields.ownershipFlag'),
        dataIndex: 'ownershipFlag',
        key: 'ownershipFlag',
      },
      {
        title: t('accountInfo.fields.holdValue'),
        dataIndex: 'holdValue',
        key: 'holdValue',
      },
      {
        title: t('accountInfo.fields.accountOpenDate'),
        dataIndex: 'accountOpenDate',
        key: 'accountOpenDate',
      },
      {
        title: t('accountInfo.fields.atmAccFlag'),
        dataIndex: 'atmAccFlag',
        key: 'atmAccFlag',
      },
      {
        title: t('accountInfo.fields.atmLimittFlag'),
        dataIndex: 'atmLimittFlag',
        key: 'atmLimittFlag',
      },
      {
        title: t('accountInfo.fields.trfAccountNo'),
        dataIndex: 'trfAccountNo',
        key: 'trfAccountNo',
      },
      {
        title: t('accountInfo.fields.atmAccFlag'),
        dataIndex: 'atmAccFlag',
        key: 'atmAccFlag',
      },
      {
        title: t('accountInfo.fields.lastFinTxnDate'),
        dataIndex: 'lastFinTxnDate',
        key: 'lastFinTxnDate',
      },
      {
        title: t('accountInfo.fields.accountSystem'),
        dataIndex: 'accountSystem',
        key: 'accountSystem',
      },
      {
        title: t('accountInfo.fields.ownerPercent'),
        dataIndex: 'ownerPercent',
        key: 'ownerPercent',
      },
      {
        title: t('accountInfo.fields.sayahTrackNo'),
        dataIndex: 'sayahTrackNo',
        key: 'sayahTrackNo',
      },
    ],
    [t],
  );

  return (
    <Card title={t('accountInfo.page.title')} className='bg-red-400!'>
      <Form layout='inline' onFinish={onFinish}>
        <FormItem name='nationalCode' label={t('accountInfo.fields.nationalCode')} required rules={[{ required: true, message: t('accountInfo.rules.required') }]}>
          <Input />
        </FormItem>
        <FormItem name='personType' label={t('accountInfo.fields.personType')}>
          <Select className='min-w-28!' options={PersonTypeList} allowClear showSearch />
        </FormItem>
        <Button type='primary' htmlType='submit' loading={isPending}>
          ok
        </Button>
      </Form>
      <Table<IAccount.GetAccountInfoByAccountNo.Res[0]> columns={columns} rowKey='sayahTrackNo' dataSource={accountInfoList} loading={isPending} scroll={{ x: 45 * 150, y: 400 }} className='overflow-auto!' />
    </Card>
  );
};

export default AccountInfo;
