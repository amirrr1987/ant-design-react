import { useRoleHttp } from '@/http/role.http';
import type { IResult } from '@/models/result.model';
import type { IRole } from '@/models/role.model';
import {
  useMutation,
  useQuery,
  useQueryClient,
  type UseMutationResult,
  type UseQueryResult,
} from '@tanstack/react-query';

export const useRoleService = () => {
  const roleHttp = useRoleHttp();

  const useCreateRole = (): UseMutationResult<
    IResult<IRole.Create.Res>,
    Error,
    IRole.Create.Req
  > => {
    const queryClient = useQueryClient();
    return useMutation({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['roles'],
          refetchType: 'active',
        });
      },
      mutationFn: (data: IRole.Create.Req) => roleHttp.createRole(data),
    });
  };

  const useGetRoles = (): UseQueryResult<
    IResult<IRole.GetList.Res>,
    Error
  > => {
    return useQuery<IResult<IRole.GetList.Res>, Error>({
      queryKey: ['roles'],
      queryFn: () => roleHttp.getRoles(),
    });
  };
  return { useCreateRole, useGetRoles };
};
