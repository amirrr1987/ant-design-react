import { RoutesConstant } from '@/constants/route.constant';
import ZinafReportView from '@/views/Zinaf/ZinafReportView';
import { type RouteObject } from 'react-router-dom';

export const zinafRoutes: RouteObject[] = [
  {
    path: 'zinaf/report',
    element: <ZinafReportView />,
    handle: { breadcrumb: 'zinaf-report' },
    id: RoutesConstant.ZinafReport.id,
  },
];
