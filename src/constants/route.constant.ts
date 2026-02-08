// routes.ts
export const RoutesConstant = {
  Dashboard: {
    id: 'TheDashboard',
    path: '/',
  },
  Users: {
    id: 'TheUsers',
    path: '/users',
  },
  Roles: {
    id: 'TheRoles',
    path: '/roles',
  },
  Zinaf: {
    id: 'TheZinaf',
    path: '/zinaf',
  },
  ZinafReport: {
    id: 'TheZinafReport',
    path: '/zinaf/report',
  },
  Customer: {
    id: 'TheCustomer',
    path: '/customers',
  },

  Account: {
    id: 'TheAccount',
    path: '/account',
  },
  AccountInfo: {
    id: 'TheAccountInfo',
    path: '/account-info',
  },
  CustomerWithMobile: {
    id: 'TheCustomerWithMobile',
    path: '/customer-with-mobile',
  },
  AccountWithdrawal: {
    id: 'TheAccountWithdrawal',
    path: '/account-withdrawal',
  },
} as const;
