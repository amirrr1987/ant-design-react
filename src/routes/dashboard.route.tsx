import DashboardView from '@/views/Dashboard/DashboardView';
import type { RouteObject } from 'react-router-dom';

export const dashboardRoutes: RouteObject[] = [
  {
    path: '',
    element: <DashboardView />,
    handle: { breadcrumb: 'dashboard' },
    id: 'DashboardView',
  },
];