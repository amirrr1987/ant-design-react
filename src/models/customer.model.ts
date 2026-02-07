import type { PersonTypeType } from '@/types/customer.type';

export interface Customer {
  firstName: string | null;
  lastName: string | null;
  fatherName: string | null;
  birthCertificateNumber: string | null;
  customerNo: string | null;
  nationalID: string | null;
  fullName: string | null;
  mobileNumber: string | null;
  accountNumber: string | null;
  cardNumber: string | null;
}

interface CustomerBaseInfoResponseDTO {
  nationalID: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  birthDate: string;
  gender: string;
  fatherName: string;
  customerNo: string;
  certificateID: string;
  companyRegID: string;
}

export namespace ICustomer {
  export namespace GetCustomer {
    export interface Req {
      firstName?: string;
      lastName?: string;
      fatherName?: string;
      birthCertificateNumber?: string;
      customerNo?: string;
      nationalID?: string;
      fullName?: string;
      mobileNumber?: string;
      accountNumber?: string;
      cardNumber?: string;
    }
    export interface Res {
      firstName: string | null;
      lastName: string | null;
      fatherName: string | null;
      birthCertificateNumber: string | null;
      customerNo: string | null;
      nationalID: string | null;
      fullName: string | null;
      birthDate: string | null;
      gender: string | null;
      nationality: string | null;
      customerType: string | null;
      customerStatus: string | null;
      maritalStatus: string | null;
      educationalStatus: string | null;
      shahabCode: string | null;
      economicCode: string | null;
      mobileNumber: string;
      phonNumber: string;
      postalCode: string;
      address: string;
      customerEmail: string;
      countOfChangeAddress: number;
      jobStatus: string;
      dateOfChangeCustomerData: string;
      areaBranch: string;
      branchName: string;
      branchCode: string;
      countOfActiveAccount: number;
      hasFund: boolean;
      hasWalletOnAccount: boolean;
      isInBalckList: boolean;
      isSuspectedOfMoneyLaundering: boolean;
      idType: string;
    }
  }
  export namespace GetCustomerByAccountNumber {
    export interface Req {
      accountNumber: string;
    }
    export interface Res {
      NationalCode: string;
      IdType: string;
    }
  }
  export namespace GetAccountStatement {
    export interface Req {
      idNumber: string;
      personType: string;
    }
    export interface Res extends Array<CustomerBaseInfoResponseDTO> {}
  }
  export namespace GetCustomerInfoWithMobile {
    export interface Req {
      mobileNumber: string;
    }
    export interface Res extends Array<CustomerBaseInfoResponseDTO> {}
  }
  export namespace GetCustomerInfoWithNationalCode {
    export interface Req {
      nationalCode: string;
      personType?: PersonTypeType;
    }
    export interface Res extends Array<CustomerBaseInfoResponseDTO> {}
  }
}
