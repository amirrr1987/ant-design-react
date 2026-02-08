import { Api } from '@/config/api.config';
import { http } from '@/config/http.config';
import type { IResult } from '@/models/result.model';
import type { IUser } from '@/models/user.model';

export const useUserHttp = () => {
  const getUserList = async (): Promise<
    IResult<IUser.GetList.Res>
  > => {
    const response = await http.get<IResult<IUser.GetList.Res>>(
      Api.User.V1.GetAllUsers,
    );
    return response.data;
  };

  const createUser = async (
    reqBody: IUser.Create.Req,
  ): Promise<IResult<IUser.Create.Res>> => {
    const response = await http.post<IResult<IUser.Create.Res>>(
      Api.User.V1.CreateUser,
      reqBody,
    );
    return response.data;
  };

  const EditApproveUserByAdmin = async (
    reqBody: IUser.EditApproveUserByAdmin.Req,
  ): Promise<IResult<IUser.EditApproveUserByAdmin.Res>> => {
    const response = await http.post<
      IResult<IUser.EditApproveUserByAdmin.Res>
    >(Api.User.V1.EditApproveUserByAdmin, reqBody);
    return response.data;
  };
  const getCurrentUser = async (): Promise<
    IResult<IUser.GetCurrentUser.Res>
  > => {
    const response = await http.get<
      IResult<IUser.GetCurrentUser.Res>
    >(Api.User.V1.GetCurrentUser);
    return response.data;
  };

  return { getUserList, createUser, EditApproveUserByAdmin, getCurrentUser };
};
