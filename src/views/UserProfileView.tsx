import { useUserService } from '@/services/user.service';
import { Card, Descriptions } from 'antd';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
  const userService = useUserService();
  const { data: currentUser } = userService.useGetCurrentUser();

  return (
    <Card title={t('profile.page.title')}>
      <Descriptions title={t('profile.fields.userInfo')} layout='vertical'>
        <Descriptions.Item label={t('profile.fields.username')}>
          {currentUser?.data?.username || t('profile.states.noUsername')}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default Profile;
