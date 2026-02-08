import { useUserHttp } from '@/http/user.http';
import type { IResult } from '@/models/result.model';
import type { IUser } from '@/models/user.model';
import { useMutation, useQuery, useQueryClient, type UseMutationResult, type UseQueryResult } from '@tanstack/react-query';

export const useUserService = () => {
  const userHttp = useUserHttp();
  const useCreateUser = (): UseMutationResult<IResult<IUser.Create.Res>, Error, IUser.Create.Req> => {
    const queryClient = useQueryClient();
    return useMutation({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['users'],
          refetchType: 'active',
        });
      },
      mutationFn: (data: IUser.Create.Req) => userHttp.createUser(data),
    });
  };

  const useGetUserList = (): UseQueryResult<IResult<IUser.GetList.Res>, Error> => {
    return useQuery<IResult<IUser.GetList.Res>, Error>({
      queryKey: ['users'],
      queryFn: () => userHttp.getUserList(),
    });
  };

  const useEditApproveUserByAdmin = (): UseMutationResult<IResult<IUser.EditApproveUserByAdmin.Res>, Error, IUser.EditApproveUserByAdmin.Req> => {
    return useMutation({
      mutationFn: (data: IUser.EditApproveUserByAdmin.Req) => userHttp.EditApproveUserByAdmin(data),
    });
  };

  const useGetCurrentUser = (): UseQueryResult<IResult<IUser.GetCurrentUser.Res>, Error> => {
    return useQuery<IResult<IUser.GetCurrentUser.Res>, Error>({
      queryKey: ['currentUser'],
      queryFn: () => userHttp.getCurrentUser(),
    });
  };

  return {
    useCreateUser,
    useGetUserList,
    useEditApproveUserByAdmin,
    useGetCurrentUser,
  };
};
