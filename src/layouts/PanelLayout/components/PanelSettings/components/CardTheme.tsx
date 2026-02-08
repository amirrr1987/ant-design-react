import { useThemeStore } from '@/stores/theme.store'
import { blue, gold } from '@ant-design/colors'
import { BulbOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons'
import { Card, Segmented, Space, theme } from 'antd'

const CardTheme = () => {
  const { useToken } = theme
  const { token } = useToken()
  const themeStore = useThemeStore()
  return (
    <Card
      title={
        <Space>
          <BulbOutlined />
          <span>{'darkMode'}</span>
        </Space>
      }
    >
      <Segmented
        block
        options={[
          {
            label: (
              <Space>
                <SunOutlined
                  style={{
                    color: themeStore.isDark ? token.colorTextTertiary : gold.primary,
                    transition: 'all 0.3s'
                  }}
                />
                <span>{'Light'}</span>
              </Space>
            ),
            value: false
          },
          {
            label: (
              <Space>
                <MoonOutlined
                  style={{
                    color: themeStore.isDark ? blue.primary : token.colorTextTertiary
                  }}
                />
                <span>{'Dark'}</span>
              </Space>
            ),
            value: true
          }
        ]}
        value={themeStore.isDark}
        onChange={(value: boolean) => themeStore.setIsDark(value)}
      />
    </Card>
  )
}
export default CardTheme
