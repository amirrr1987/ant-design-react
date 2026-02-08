import type { IResult } from '@/models/result.model';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { useCustomerHttp } from '../http/customer.http';
import type { ICustomer } from '../models/customer.model';

export const useCustomerService = () => {
  const customerHttp = useCustomerHttp();

  const getCustomer = (reqBody: ICustomer.GetCustomer.Req, options?: { enabled?: boolean }): UseQueryResult<IResult<ICustomer.GetCustomer.Res>, Error> => {
    return useQuery<IResult<ICustomer.GetCustomer.Res>, Error>({
      queryKey: ['customer', reqBody],
      queryFn: () => customerHttp.getCustomer(reqBody),
      enabled: options?.enabled ?? true,
    });
  };

  const getCustomerInfoByMobile = (reqBody: ICustomer.GetCustomerInfoWithMobile.Req, options?: { enabled?: boolean }): UseQueryResult<IResult<ICustomer.GetCustomerInfoWithMobile.Res>, Error> => {
    return useQuery<IResult<ICustomer.GetCustomerInfoWithMobile.Res>, Error>({
      queryKey: ['customerInfoByMobile', reqBody],
      queryFn: () => customerHttp.getCustomerInfoByMobile(reqBody),
      enabled: options?.enabled ?? true,
    });
  };
  const getCustomerInfoByNationalCode = (reqBody: ICustomer.GetCustomerInfoWithNationalCode.Req, options?: { enabled?: boolean }): UseQueryResult<IResult<ICustomer.GetCustomerInfoWithNationalCode.Res>, Error> => {
    return useQuery<IResult<ICustomer.GetCustomerInfoWithNationalCode.Res>, Error>({
      queryKey: ['customerInfoByNationalCode', reqBody],
      queryFn: () => customerHttp.getCustomerInfoByNationalCode(reqBody),
      enabled: options?.enabled ?? true,
    });
  };
  return {
    getCustomer,
    getCustomerInfoByMobile,
    getCustomerInfoByNationalCode,
  };
};
