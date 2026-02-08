import { Api } from '@/config/api.config';
import { http } from '@/config/http.config';
import type { ICustomer } from '@/models/customer.model';
import type { IResult } from '@/models/result.model';

export const useCustomerHttp = () => {
  const getCustomer = async (reqBody: ICustomer.GetCustomer.Req): Promise<IResult<ICustomer.GetCustomer.Res>> => {
    const response = await http.post<IResult<ICustomer.GetCustomer.Res>>(Api.Customer.V1.GetCustomer, reqBody);
    return response.data;
  };

  const getCustomerByAccountNumber = async (reqBody: ICustomer.GetCustomerByAccountNumber.Req): Promise<IResult<ICustomer.GetCustomerByAccountNumber.Res>> => {
    const response = await http.post<IResult<ICustomer.GetCustomerByAccountNumber.Res>>(Api.Customer.V1.GetCustomerByAccountNumber, reqBody);
    return response.data;
  };

  const getAccountStatement = async (reqBody: ICustomer.GetAccountStatement.Req): Promise<IResult<ICustomer.GetAccountStatement.Res>> => {
    const response = await http.post<IResult<ICustomer.GetAccountStatement.Res>>(Api.Customer.V1.GetAccountStatement, reqBody);
    return response.data;
  };
  const getCustomerInfoByMobile = async (reqBody: ICustomer.GetCustomerInfoWithMobile.Req): Promise<IResult<ICustomer.GetCustomerInfoWithMobile.Res>> => {
    const response = await http.post<IResult<ICustomer.GetCustomerInfoWithMobile.Res>>(Api.Customer.V1.GetCustomerInfoByMobile, reqBody);
    return response.data;
  };
  const getCustomerInfoByNationalCode = async (reqBody: ICustomer.GetCustomerInfoWithNationalCode.Req): Promise<IResult<ICustomer.GetCustomerInfoWithNationalCode.Res>> => {
    const response = await http.post<IResult<ICustomer.GetCustomerInfoWithNationalCode.Res>>(Api.Customer.V1.GetCustomerInfoByNationalCode, reqBody);
    return response.data;
  };
  return {
    getCustomer,
    getCustomerByAccountNumber,
    getAccountStatement,
    getCustomerInfoByMobile,
    getCustomerInfoByNationalCode,
  };
};
