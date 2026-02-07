import type { LoginProviderEnum } from '@/types/user.type';
import type { Role } from '@/models/role.model';

export interface Claim {
  type: string;
  value: string;
  valueType: string;
  issuer: string;
}

export interface User {
  id: string;
  username: string;
  roles: Role['value'][];
  claims: Claim[];
  approvedByAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export namespace IUser {
  export namespace GetList {
    export type Res = User[];
  }
  export namespace Create {
    export type Req = {
      username: string;
      password: string;
      loginProvider: LoginProviderEnum;
    };
    export type Res = boolean;
  }
  export namespace EditApproveUserByAdmin {
    export type Params = {
      username: User['username'];
      approvedByAdmin: User['approvedByAdmin'];
    };
    export type Req = Pick<User, 'username' | 'approvedByAdmin'>;
    export type Res = boolean;
  }

  export namespace GetCurrentUser {
    export type Res = User;
  }
}
