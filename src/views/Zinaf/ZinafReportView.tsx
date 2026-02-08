// import { useZinafService } from '@/services/zinaf.service';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Descriptions } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
const ZinafReportView = async () => {
  // const zinafService = useZinafService();
  const { t } = useTranslation();
  // const [nationalId, setNationalId] = useState('');
  const [_open, setOpen] = useState(false);

  // const getZinafReportMutation = zinafService.useGetZinafReport();
  // const { data } = await getZinafReportMutation.mutateAsync({
  //   nationalId: '2803390221',
  // });

  useEffect(() => {
    // No-op or add any side-effect code here if needed in future
  }, []);

  return (
    <>
      <Card
        title={t('zinaf.page.title')}
        extra={
          <Button
            type='primary'
            ghost
            icon={<PlusOutlined />}
            className='flex! items-center justify-center'
            onClick={() => setOpen(true)}
          >
            {t('zinaf.actions.create')}
          </Button>
        }
      >
        <Descriptions>
          <Descriptions.Item label={t('zinaf.fields.nationalId')}>
            {/* {zinafReport?.data} */}
            {/* {data} */}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </>
  );
};

export default ZinafReportView;
