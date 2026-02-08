import { useThemeStore } from '@/stores/theme.store'
import { CompressOutlined, ExpandOutlined } from '@ant-design/icons'
import { Card, Segmented, Space } from 'antd'
const CardCompact = () => {
  const themeStore = useThemeStore()
  return (
    <Card
      title={
        <Space>
          <CompressOutlined />
          <span>{'settings.fields.compactMode'}</span>
        </Space>
      }
    >
      <Segmented
        block
        options={[
          {
            label: (
              <Space>
                <ExpandOutlined />
                {('settings.options.normal')}
              </Space>
            ),
            value: false
          },
          {
            label: (
              <Space>
                <CompressOutlined />
                {('settings.options.compact')}
              </Space>
            ),
            value: true
          }
        ]}
        value={themeStore.isCompact}
        onChange={(value: boolean) => themeStore.setIsCompact(value)}
      />
    </Card>
  )
}

export default CardCompact
