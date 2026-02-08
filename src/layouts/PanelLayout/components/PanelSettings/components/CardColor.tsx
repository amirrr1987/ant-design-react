import { primaryColorsList } from '@/constants'
import { useThemeStore } from '@/stores/theme.store'
import { BgColorsOutlined } from '@ant-design/icons'
import { Card, Radio, Segmented, Space, theme, type RadioChangeEvent } from 'antd'

const CardColor = () => {
  const { useToken } = theme
  const { token } = useToken()
  const themeStore = useThemeStore()
  return (
    <Card
      title={
        <Space>
          <BgColorsOutlined />
          <span>{('Color')}</span>
        </Space>
      }
      >
      <Radio.Group
        value={themeStore.token?.colorPrimary ?? token.colorPrimary}
        onChange={(e: RadioChangeEvent) => themeStore.setToken({ colorPrimary: e.target.value })}
      >
        {primaryColorsList.map(({ label, value }) => (
          <Radio.Button key={value} value={value}>
            {label}
          </Radio.Button>
        ))}
      </Radio.Group>
      <Segmented
        block
        options={primaryColorsList}
        value={themeStore.token?.colorPrimary ?? token.colorPrimary}
        styles={{ label: { padding: token.paddingXS, color: token.colorPrimary } }}
        onChange={value => themeStore.setToken({ colorPrimary: value })}
      />
    </Card>
  )
}

export default CardColor
