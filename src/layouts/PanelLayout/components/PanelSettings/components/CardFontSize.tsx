import { useThemeStore } from '@/stores/theme.store'
import { FontSizeOutlined } from '@ant-design/icons'
import { Card, Segmented, Space } from 'antd'

const CardFontSize = () => {
  const themeStore = useThemeStore()
  return (
    <Card
      title={
        <Space>
          <FontSizeOutlined />
          <span>{'settings.fields.fontSize'}</span>
        </Space>
      }
    >
      <Segmented
        block
        options={[
          { label: '12', value: '12' },
          { label: '14', value: '14' },
          { label: '16', value: '16' },
          { label: '18', value: '18' },
          { label: '20', value: '20' }
        ]}
        value={themeStore.token?.fontSize?.toString()}
        onChange={(value: string) => {
          if (value !== themeStore.token?.fontSize?.toString())
            themeStore.setToken({ fontSize: parseInt(value, 10) })
        }}
      />
    </Card>
  )
}
export default CardFontSize
