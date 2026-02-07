interface Captcha {
  captchaId: string;
  captchaImageBase64: string;
  userInput: string;
}

export namespace ICaptcha {
  export namespace Generate {
    export type Method = 'GET';
    export namespace Response {
      export interface Body extends Omit<Captcha, 'userInput'> {}
    }
  }
  export namespace Verify {
    export type Method = 'POST';
    export namespace Request {
      export interface Body extends Omit<Captcha, 'captchaImageBase64'> {}
    }
    export namespace Response {
      export type Body = boolean;
    }
  }
}
