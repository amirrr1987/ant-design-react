import { Api } from '@/config/api.config';
import { http } from '@/config/http.config';
import type { IAuth } from '@/models/auth.model';
import type { IResult } from '@/models/result.model';

export const useAuthHttp = () => {
  const login = async (
    loginReqBody: IAuth.Login.Req,
  ): Promise<IResult<IAuth.Login.Res>> => {
    const response = await http.post<IResult<IAuth.Login.Res>>(
      Api.Auth.V1.Login,
      loginReqBody,
    );
    return response.data;
  };
  const refreshToken = async (
    refreshTokenReqBody: IAuth.RefreshToken.Req,
  ): Promise<IResult<IAuth.RefreshToken.Res>> => {
    const response = await http.post<IResult<IAuth.RefreshToken.Res>>(
      Api.Auth.V1.RefreshToken,
      refreshTokenReqBody,
    );
    return response.data;
  };
  return { login, refreshToken };
};
