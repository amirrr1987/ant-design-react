import { QueryClientProvider } from '@tanstack/react-query'
import { Button, ConfigProvider, theme } from 'antd'
import enUS from 'antd/locale/en_US'
import faIR from 'antd/locale/fa_IR'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import './lib/i18n'
import { queryClient } from './lib/react-query'
import { router } from './router'
import { useThemeStore } from './stores/theme-store'

const App = () => {
  const themeStore = useThemeStore()
  const themeConfig = {
    algorithm: [
      themeStore.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      ...(themeStore.isCompact ? [theme.compactAlgorithm] : [])
    ],
    token: themeStore.token,
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
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  )
}

export default App
