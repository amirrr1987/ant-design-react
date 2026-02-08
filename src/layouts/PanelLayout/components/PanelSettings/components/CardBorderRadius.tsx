import { useThemeStore } from '@/stores/theme.store'
import { RadiusSettingOutlined } from '@ant-design/icons'
import { Card, Segmented, Space } from 'antd'

const CardBorderRadius = () => {
  const themeStore = useThemeStore()
  return (
    <Card
      title={
        <Space>
          <RadiusSettingOutlined />
          <span>{'settings.fields.borderRadius'}</span>
        </Space>
      }
    >
      <Segmented
        block
        options={[
          { label: '0', value: '0' },
          { label: '3', value: '3' },
          { label: '6', value: '6' },
          { label: '9', value: '9' },
          { label: '12', value: '12' },
          { label: '15', value: '15' },
          { label: '18', value: '18' }
        ]}
        value={themeStore.token?.borderRadius?.toString()}
        onChange={(value: string) => {
          if (value !== themeStore.token?.borderRadius?.toString())
            themeStore.setToken({ borderRadius: parseInt(value, 10) })
        }}
      />
    </Card>
  )
}
export default CardBorderRadius
