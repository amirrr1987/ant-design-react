import { createBrowserRouter } from 'react-router-dom'
import PanelLayout from '../layouts/panel/PanelLayout'
import ForgetPage from '../pages/auth/Forget'
import LoginPage from '../pages/auth/Login'
import RegisterPage from '../pages/auth/Register'
import DashboardPage from '../pages/panel/Dashboard'

export const router = createBrowserRouter([
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      },
      {
        path: 'forget',
        element: <ForgetPage />
      }
    ]
  },
  {
    path: '/',
    element: <PanelLayout />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />
      }
    ]
  }
])
