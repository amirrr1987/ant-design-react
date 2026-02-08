import type { ICustomer } from '@/models/customer.model';
import { useCustomerService } from '@/services/customer.service';
import Button from 'antd/es/button';
import Form from 'antd/es/form/Form';
import FormItem from 'antd/es/form/FormItem';
import Input from 'antd/es/input/Input';
import { useEffect, useState } from 'react';

interface Props {
  setCustomers: (e: ICustomer.GetCustomerInfoWithMobile.Res) => void;
  setIsFetching: (e: boolean) => void;
}
const WidthMobile = (props: Props) => {
  const customerService = useCustomerService();

  const [req, setReq] = useState<ICustomer.GetCustomerInfoWithMobile.Req>({} as ICustomer.GetCustomerInfoWithMobile.Req);

  const { data: customerData, isFetching, status } = customerService.getCustomerInfoByMobile(req as ICustomer.GetCustomerInfoWithMobile.Req, { enabled: !!req.mobileNumber });

  const onFinish = ({ mobileNumber }: ICustomer.GetCustomerInfoWithMobile.Req) => {
    setReq({
      ...req,
      mobileNumber,
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
        name='mobileNumber'
        label='شماره موبایل'
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
      <FormItem>
        <Button type='primary' htmlType='submit' block loading={isFetching}>
          جستجو
        </Button>
      </FormItem>
    </Form>
  );
};
export default WidthMobile;
