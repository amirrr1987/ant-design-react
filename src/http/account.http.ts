import { Api } from '@/config/api.config';
import { http } from '@/config/http.config';
import type { IAccount } from '@/models/account.model';
import type { IResult } from '@/models/result.model';

export const useAccountHttp = () => {
  const getAccountInfoByAccountNo = async (reqBody: IAccount.GetAccountInfoByAccountNo.Req): Promise<IResult<IAccount.GetAccountInfoByAccountNo.Res>> => {
    const response = await http.post<IResult<IAccount.GetAccountInfoByAccountNo.Res>>(Api.Account.v1.GetAccountInfoByNationalCode, reqBody);
    return response.data;
  };

  return { getAccountInfoByAccountNo };
};
