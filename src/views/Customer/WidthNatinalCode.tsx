import { PersonTypeList } from '@/constants/customer.constant';
import type { ICustomer } from '@/models/customer.model';
import { useCustomerService } from '@/services/customer.service';
import { Select } from 'antd';
import Button from 'antd/es/button';
import Form from 'antd/es/form/Form';
import FormItem from 'antd/es/form/FormItem';
import Input from 'antd/es/input/Input';
import { useEffect, useState } from 'react';

interface Props {
  setCustomers: (e: ICustomer.GetCustomerInfoWithNationalCode.Res) => void;
  setIsFetching: (e: boolean) => void;
}
const WidthNatinalCode = (props: Props) => {
  const customerService = useCustomerService();

  const [req, setReq] = useState<ICustomer.GetCustomerInfoWithNationalCode.Req>({} as ICustomer.GetCustomerInfoWithNationalCode.Req);

  const { data: customerData, isFetching, status } = customerService.getCustomerInfoByNationalCode(req as ICustomer.GetCustomerInfoWithNationalCode.Req, { enabled: !!req.nationalCode! });

  const onFinish = (nationalCode: ICustomer.GetCustomerInfoWithNationalCode.Req) => {
    setReq({
      ...req,
      ...nationalCode,
    });
  };

  useEffect(() => {
    props.setIsFetching(isFetching);
  }, [isFetching]);

  useEffect(() => {
    props.setCustomers(customerData?.data!);
  }, [() => status == 'success']);

  return (
    <Form layout='inline' onFinish={onFinish}>
      <FormItem
        name='nationalCode'
        label='شماره ملی'
        rules={[
          {
            required: true,
            message: 'ای فیلد الزامی است',
          },
          {
            type: 'regexp',
            message: 'سیبسیب',
          },
        ]}
      >
        <Input />
      </FormItem>
      <FormItem name='personType' label='نوع '>
        <Select className='min-w-30!' allowClear options={PersonTypeList} showSearch>
          {/* <Select.Option value={PersonType.CbiCode}>CbiCode</Select.Option>
          <Select.Option value={PersonType.Foreign}>Foreign</Select.Option>
          <Select.Option value={PersonType.Legal}>Legal</Select.Option>
          <Select.Option value={PersonType.Real}>Real</Select.Option> */}
        </Select>
      </FormItem>
      <FormItem>
        <Button type='primary' htmlType='submit' block loading={isFetching}>
          جستجو
        </Button>
      </FormItem>
    </Form>
  );
};
export default WidthNatinalCode;
