import RoleListView from '@/views/Roles/RoleListView';
import { type RouteObject } from 'react-router-dom';

export const roleRoutes: RouteObject[] = [
  {
    path: 'roles',
    element: <RoleListView />,
    handle: { breadcrumb: 'roles' },
    id: 'TheRoles',
  },
];
