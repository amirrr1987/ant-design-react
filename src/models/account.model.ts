import type { PersonTypeType } from '@/types/customer.type';

export interface AccountInfoDto {
  nationalCode: string;
  idType: string;
  shahabNumber: string;
  identityIssueDate: string;
  identityPlace: string;
  customerNumber: string;
  cusotmerStatus: string;
  customerType: string;
  provinceCode: string;
  postalCode: string;
  address: string;
  customerCellNo: string;
  firstName: string;
  lastName: string;
  fatherName: string;
  certificateId: string;
  companyRegId: string;
  gender: string;
  birthDate: string;
  email1: string;
  email2: string;
  accountNumber: string;
  currency: string;
  currentBalance: number;
  accountStopsCount: string;
  accountWithdrawalStopCount: string;
  accountHoldcount: string;
  availableBalance: number;
  branchNo: string;
  currentStatus: string;
  accountStatus: string;
  accountType: string;
  intCat: string;
  ownershipFlag: number;
  holdValue: number;
  accountOpenDate: string;
  atmAccFlag: string;
  atmLimittFlag: string;
  trfAccountNo: string;
  lastFinTxnDate: string;
  accountSystem: string;
  ownerPercent: string;
  sayahTrackNo: string;
}

export namespace IAccount {
  export namespace GetAccountInfoByAccountNo {
    export interface Req {
      nationalCode: string;
      personType?: PersonTypeType;
    }
    export type Res = ReadonlyArray<AccountInfoDto>;
  }
}
