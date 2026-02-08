import { useThemeStore } from '@/stores/theme.store'
import { Drawer, Space, theme } from 'antd'
import CardBorderRadius from './components/CardBorderRadius'
import CardColor from './components/CardColor'
import CardCompact from './components/CardCompact'
import CardComponentsSize from './components/CardComponentsSize'
import CardFontSize from './components/CardFontSize'
import CardLanguage from './components/CardLanguage'
import CardTheme from './components/CardTheme'

/** Unique { label, value } options; deduped by hex so Segmented keys are unique */

interface Props {
  isSettingOpen: boolean
  setIsSettingOpen: (isSettingOpen: boolean) => void
}
const PanelSettings = (props: Props) => {
  const { useToken } = theme
  const { token } = useToken()
  const themeStore = useThemeStore()
  return (
    <Drawer
      title="تنظیمات"
      open={props.isSettingOpen}
      onClose={() => props.setIsSettingOpen(false)}
      styles={{ body: { paddingBlockStart: token.marginSM } }}
      placement={themeStore.direction === 'ltr' ? 'right' : 'left'}
    >
      <Space orientation="vertical" style={{ width: '100%' }}>
        <CardColor />
        <CardTheme />
        <CardCompact />
        <CardComponentsSize />
        <CardLanguage />
        <CardFontSize />
        <CardBorderRadius />
      </Space>
    </Drawer>
  )
}

export default PanelSettings
