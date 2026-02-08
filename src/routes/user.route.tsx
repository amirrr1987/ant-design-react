import ProfileView from '@/views/UserProfileView';
import UserListView from '@/views/Users/UserListView';
import { type RouteObject } from 'react-router-dom';

export const userRoutes: RouteObject[] = [
  {
    path: 'users',
    element: <UserListView />,
    handle: { breadcrumb: 'users' },
    id: 'TheUsers',
  },
  {
    path: 'profile',
    element: <ProfileView />,
    handle: { breadcrumb: 'profile' },
    id: 'TheProfile',
  },
];
