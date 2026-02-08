import { QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider, theme } from 'antd'
import enUS from 'antd/locale/en_US'
import faIR from 'antd/locale/fa_IR'
import { RouterProvider } from 'react-router-dom'
import './lib/i18n'
import { queryClient } from './lib/react-query'
import router from './router'
import { useThemeStore } from './stores/theme.store'

import { App as AntdApp } from 'antd'

const App = () => {
  const themeStore = useThemeStore()
  const themeConfig = {
    algorithm: [
      themeStore.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      ...(themeStore.isCompact ? [theme.compactAlgorithm] : [])
    ],
    token: themeStore.token,
    components: {
      Layout: {
        headerBg: themeStore.token?.colorBgContainer,
        triggerBg: themeStore.token?.colorPrimary
      }
    }
  }
  const locale = themeStore.language === 'fa' ? faIR : enUS

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={themeConfig}
        locale={locale}
        direction={themeStore.direction}
        componentSize={themeStore.componentSize}
      >
        <AntdApp>
          <RouterProvider router={router} />
        </AntdApp>
      </ConfigProvider>
    </QueryClientProvider>
  )
}

export default App
