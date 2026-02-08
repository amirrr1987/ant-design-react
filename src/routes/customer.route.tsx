import CustomerListView from '@/views/Customer/CustomerListView';
import CustomerWithMobile from '@/views/Customer/Customer';
import { type RouteObject } from 'react-router-dom';

export const customerRoutes: RouteObject[] = [
  {
    path: 'customers',
    element: <CustomerListView />,
    handle: { breadcrumb: 'customers' },
    id: 'TheCustomers',
  },
  {
    path: 'customer-with-mobile',
    element: <CustomerWithMobile />,
    handle: { breadcrumb: 'customer-with-mobile' },
    id: 'TheCustomerWithMobile',
  },
];
