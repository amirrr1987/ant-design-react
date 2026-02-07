export namespace IAuth {
  export namespace Login {
    export interface Req {
      username: string;
      password: string;
      grant_type: string;
      client_id: string;
      client_secret: string;
    }
    export interface Res {
      access_token: string;
      refresh_token: string;
    }
  }
  export namespace Register {
    export interface Req {
      username: string;
      password: string;
    }
  }
  export namespace RefreshToken {
    export interface Req {
      token: string;
      refreshToken: string;
    }
  }
  export namespace RefreshToken {
    export interface Res {
      access_token: string;
      refresh_token: string;
      refresh_expires_in: string;
    }
  }
}
