import ForgotPasswordView from '@/views/Auth/ForgotPasswordView';
import LoginView from '@/views/Auth/LoginView';
import RegisterView from '@/views/Auth/RegisterView';
import type { RouteObject } from 'react-router-dom';

export const authRoutes: RouteObject[] = [
  {
    path: 'login',
    element: <LoginView />,
    handle: { breadcrumb: 'login' },
    id: 'TheLogin',
  },
  {
    path: 'register',
    element: <RegisterView />,
    handle: { breadcrumb: 'register' },
    id: 'TheRegister',
  },
  {
    path: 'forgot-password',
    element: <ForgotPasswordView />,
    handle: { breadcrumb: 'forgotPassword' },
    id: 'TheForgotPassword',
  },
];


// camelCase
// PascalCase
// kebab-case
// snake_case