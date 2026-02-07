import type { DirectionType } from 'antd/es/config-provider'
import type { SizeType } from 'antd/es/config-provider/SizeContext'
import type { Locale } from 'antd/es/locale'
import type { AliasToken } from 'antd/es/theme/internal'
import enUS from 'antd/locale/en_US'
import faIR from 'antd/locale/fa_IR'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeState {
  isDark: boolean
  isCompact: boolean
  language: 'fa' | 'en'
  fullscreen: boolean
  fullContent: boolean
  transition: 'fade' | 'slide' | 'zoom' | 'none'
  toggleDark: () => void
  setIsDark: (isDark: boolean) => void
  toggleCompact: () => void
  setIsCompact: (isCompact: boolean) => void
  toggleLanguage: () => void
  toggleFullscreen: () => void
  setIsFullscreen: (fullscreen: boolean) => void
  toggleFullContent: () => void
  setIsFullContent: (fullContent: boolean) => void
  setTransition: (transition: 'fade' | 'slide' | 'zoom' | 'none') => void
  componentSize?: SizeType
  setComponentSize: (componentSize: SizeType) => void
  locale?: Locale
  setLocale: (locale: Locale) => void
  direction?: DirectionType
  toggleDirection: () => void
  token?: Partial<AliasToken>
  setToken: (token: Partial<AliasToken>) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      isDark: false,
      isCompact: false,
      language: 'fa',
      fullscreen: false,
      fullContent: false,
      transition: 'fade',
      direction: 'ltr',
      token: {
        colorPrimary: '#812341',
        borderRadius: 6,
        fontSize: 14
      },
      toggleDark: () => set(state => ({ isDark: !state.isDark })),
      setIsDark: (isDark: boolean) => set({ isDark }),
      toggleCompact: () => set(state => ({ isCompact: !state.isCompact })),
      setIsCompact: (isCompact: boolean) => set({ isCompact }),
      toggleLanguage: () =>
        set(state => ({
          language: state.language === 'fa' ? 'en' : 'fa',
          locale: (state.language === 'fa' ? enUS : faIR) as Locale
        })),
      toggleFullscreen: () => set(state => ({ fullscreen: !state.fullscreen })),
      setIsFullscreen: (fullscreen: boolean) => set({ fullscreen }),
      toggleFullContent: () => set(state => ({ fullContent: !state.fullContent })),
      setIsFullContent: (fullContent: boolean) => set({ fullContent }),
      setTransition: (transition: 'fade' | 'slide' | 'zoom' | 'none') => set({ transition }),

      componentSize: 'middle',
      setComponentSize: (componentSize: SizeType) => set({ componentSize }),
      locale: faIR as Locale,
      setLocale: (locale: Locale) => set({ locale }),
      toggleDirection: () => {
        set(state => {
          return {
            direction: state.direction === 'ltr' ? 'rtl' : 'ltr'
          }
        })
      },
      setToken: (token: Partial<AliasToken>) =>
        set(state => ({ token: { ...state.token, ...token } }))
    }),
    {
      name: 'theme-storage',
      partialize: state => ({
        isDark: state.isDark,
        isCompact: state.isCompact,
        language: state.language,
        fullscreen: state.fullscreen,
        fullContent: state.fullContent,
        transition: state.transition,
        direction: state.direction,
        componentSize: state.componentSize
      })
    }
  )
)
