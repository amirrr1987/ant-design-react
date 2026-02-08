import { Api } from '@/config/api.config';
import { http } from '@/config/http.config';
import type { IResult } from '@/models/result.model';
import type { IRole } from '@/models/role.model';

export const useRoleHttp = () => {
  const getRoles = async (): Promise<IResult<IRole.GetList.Res>> => {
    const response = await http.get<IResult<IRole.GetList.Res>>(
      Api.Role.V1.GetRoles,
    );
    return response.data;
  };  

  const createRole = async (
      role: IRole.Create.Req,
  ): Promise<IResult<IRole.Create.Res>> => {
    const response = await http.post<IResult<IRole.Create.Res>>(
      Api.Role.V1.CreateRole,
      role,
    );
    return response.data;
  };
  return { getRoles, createRole };
};
