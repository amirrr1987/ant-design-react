import { useAccountHttp } from '@/http/account.http';
import type { IAccount } from '@/models/account.model';
import type { IResult } from '@/models/result.model';
import { useMutation, useQueryClient, type UseMutationResult } from '@tanstack/react-query';

export const useAccountService = () => {
  const accountHttp = useAccountHttp();

  const useGetAccountInfoByAccountNo = (): UseMutationResult<IResult<IAccount.GetAccountInfoByAccountNo.Res>, Error, IAccount.GetAccountInfoByAccountNo.Req> => {
    const queryClient = useQueryClient();
    return useMutation({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['accountInfo'],
          refetchType: 'active',
        });
      },
      mutationFn: (data: IAccount.GetAccountInfoByAccountNo.Req) => accountHttp.getAccountInfoByAccountNo(data),
    });
  };

  return { useGetAccountInfoByAccountNo };
};
