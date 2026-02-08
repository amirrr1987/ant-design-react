import AccountInfoView from '@/views/Accounts/AccountInfoView';
import { type RouteObject } from 'react-router-dom';

export const accountRoutes: RouteObject[] = [
  {
    path: 'account-info',
    element: <AccountInfoView />,
    handle: { breadcrumb: 'account-info' },
    id: 'TheAccountInfo',
  },
];
