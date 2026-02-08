import { useAuthHttp } from '@/http/auth.http';
import type { IAuth } from '@/models/auth.model';
import type { IResult } from '@/models/result.model';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';

export const useAuthService = () => {
  const authHttp = useAuthHttp();

  const useLogin = (): UseMutationResult<
    IResult<IAuth.Login.Res>,
    Error,
    IAuth.Login.Req
  > => {
    return useMutation({
      mutationFn: (data: IAuth.Login.Req) => authHttp.login(data),
    });
  };

  const useRefreshToken = (): UseMutationResult<
    IResult<IAuth.RefreshToken.Res>,
    Error,
    IAuth.RefreshToken.Req
  > => {
    return useMutation({
      mutationFn: (data: IAuth.RefreshToken.Req) =>
        authHttp.refreshToken(data),
    });
  };

  return {
    useLogin,
    useRefreshToken,
  };
};
