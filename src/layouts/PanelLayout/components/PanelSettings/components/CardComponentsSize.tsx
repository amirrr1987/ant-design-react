import { useThemeStore } from '@/stores/theme.store'
import { AppstoreOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Card, Segmented, Space } from 'antd'
const CardComponentsSize = () => {
  const themeStore = useThemeStore()
  return (
    <Card
      title={
        <Space>
          <AppstoreOutlined />
          <span>{'settings.fields.componentSize'}</span>
        </Space>
      }
    >
      <Segmented
        block
        options={[
          {
            label: (
              <Space>
                <MinusOutlined style={{ fontSize: '12px' }} />
                {('settings.options.small')}
              </Space>
            ),
            value: 'small'
          },
          {
            label: (
              <Space>
                <AppstoreOutlined style={{ fontSize: '14px' }} />
                {('settings.options.middle')}
              </Space>
            ),
            value: 'middle'
          },
          {
            label: (
              <Space>
                <PlusOutlined style={{ fontSize: '16px' }} />
                {('settings.options.large')}
              </Space>
            ),
            value: 'large'
          }
        ]}
        value={themeStore.componentSize ?? 'middle'}
        onChange={(value: string) =>
          themeStore.setComponentSize(value as 'small' | 'middle' | 'large')
        }
      />
    </Card>
  )
}
export default CardComponentsSize
