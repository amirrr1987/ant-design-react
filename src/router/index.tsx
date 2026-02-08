import AuthLayout from '@/layouts/Auth/AuthLayout'
import PanelLayout from '@/layouts/PanelLayout'
// import Home from '@/modules/home/views/Home.view';
// import LoginView from '@/views/auth/views/LoginView';
// import RegisterView from '@/views/auth/views/RegisterView';
// import Users from '@/modules/user/views/List.view';
import { authRoutes } from '@/routes/auth.route'
import { dashboardRoutes } from '@/routes/dashboard.route'
import { customerRoutes } from '@/routes/customer.route'
import { userRoutes } from '@/routes/user.route'
import { roleRoutes } from '@/routes/role.route'
import { zinafRoutes } from '@/routes/zinaf.route'
import { createBrowserRouter } from 'react-router-dom'
import { accountRoutes } from '@/routes/account.route'

export const routes = [
  {
    path: '/',
    element: <PanelLayout />,
    children: [
      ...dashboardRoutes,
      ...customerRoutes,
      ...userRoutes,
      ...roleRoutes,
      ...zinafRoutes,
      ...accountRoutes
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    id: 'TheAuthLayout',
    children: authRoutes
  }
]

const router = createBrowserRouter(routes)

export default router
