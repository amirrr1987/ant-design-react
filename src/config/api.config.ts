export const Api = {
  Auth: {
    V1: {
      Login: 'v1/Auth/Login',
      RefreshToken: 'v1/Auth/RefreshToken',
    },
  },
  User: {
    V1: {
      GetAllUsers: 'Users/GetAllUsers',
      CreateUser: 'Users/CreateUser',
      EditApproveUserByAdmin: 'Users/EditApproveUserByAdmin',
      GetCurrentUser: 'Users/GetCurrentUser',
      RemoveRoleFromUser: 'Users/RemoveRoleFromUser',
      AddRoleToUser: 'Users/AddRoleToUser',
      AddClaimToUser: 'Users/AddClaimToUser',
      RemoveClaimFromUser: 'Users/RemoveClaimFromUser',
    },
  },
  Role: {
    V1: {
      GetRoles: 'Roles/GetRoles',
      CreateRole: 'Roles/CreateRole',
    },
  },
  Customer: {
    V1: {
      GetCustomer: 'Customer/GetCustomer',
      GetCustomerByAccountNumber: 'Customer/GetCustomerByAccountNumber',
      GetAccountStatement: 'Customer/GetAccountStatement',
      GetCustomerInfoByMobile: 'Customer/GetCustomerInfoByMobile',
      GetCustomerInfoByNationalCode: 'Customer/GetCustomerInfoByNationalCode',
    },
  },
  Account: {
    v1: {
      GetAccountInfoByNationalCode: 'Account/GetAccountInfoByNationalCode',
      GetAccountInfoByAccountNo: 'Account/GetAccountInfoByAccountNo',
    },
  },
  Zinaf: {
    V1: {
      GetZinafReport: 'ZinafReports/GetZinafReport',
    },
  },
} as const;
