import { useThemeStore } from '@/stores/theme.store'
import { GlobalOutlined } from '@ant-design/icons'
import { Card, Segmented, Space } from 'antd'

const CardLanguage = () => {
  const themeStore = useThemeStore()
  return (
    <Card
      title={
        <Space>
          <GlobalOutlined />
          <span>{'settings.fields.language'}</span>
        </Space>
      }
    >
      <Segmented
        block
        options={[
          {
            label: (
              <Space>
                <span>🇮🇷</span>
                {('settings.options.persian')}
              </Space>
            ),
            value: 'fa'
          },
          {
            label: (
              <Space>
                <span>🇬🇧</span>
                {('settings.options.english')}
              </Space>
            ),
            value: 'en'
          }
        ]}
        value={themeStore.language}
        onChange={(value: string) => {
          if (value !== themeStore.language) themeStore.toggleLanguage()
        }}
      />
    </Card>
  )
}
export default CardLanguage
