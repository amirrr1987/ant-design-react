import { DollarOutlined, LineChartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Statistic, theme } from 'antd';
import { useTranslation } from 'react-i18next';

/**
 * کامپوننت نمایش داشبورد
 * این کامپوننت یک داشبورد ساده با کارت‌های آماری را نمایش می‌دهد
 * از کامپوننت‌های Ant Design و توکن‌های تم برای استایل‌دهی استفاده می‌کند
 * برای چیدمان از Tailwind CSS استفاده می‌شود
 */
const DashboardView = () => {
  const { t } = useTranslation();
  const { token } = theme.useToken();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      <Card>
        <Statistic title={t('dashboard.fields.totalUsers')} value={1128} prefix={<UserOutlined />} styles={{ content: { color: token.colorPrimary } }} />
      </Card>
      <Card>
        <Statistic title={t('dashboard.fields.totalOrders')} value={9324} prefix={<ShoppingCartOutlined />} styles={{ content: { color: token.colorSuccess } }} />
      </Card>
      <Card>
        <Statistic title={t('dashboard.fields.totalRevenue')} value={112893} prefix={<DollarOutlined />} precision={2} styles={{ content: { color: token.colorWarning } }} />
      </Card>
      <Card>
        <Statistic title={t('dashboard.fields.growthRate')} value={9.3} prefix={<LineChartOutlined />} suffix='%' styles={{ content: { color: token.colorError } }} />
      </Card>
    </div>
  );
};

export default DashboardView;
