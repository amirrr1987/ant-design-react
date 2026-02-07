export interface Role {
  id: string;
  label: string;
  value: string;
  createdAt: string;
  updatedAt: string;
}

export namespace IRole {
  export namespace Create {
    export interface Req {
      value: Role['value'];
      label?: Role['label'];
    }
    export type Res = boolean;
  }

  export namespace GetList {
    export type Res = Role[];
  }

  export namespace Update {
    export type Params = {
      id: Role['id'];
    };
    export type Req = Pick<Role, 'label' | 'value'>;
    export type Res = boolean;
  }

  export namespace Delete {
    export type Params = {
      id: Role['id'];
    };
    export type Res = boolean;
  }
}
