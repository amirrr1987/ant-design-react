// import type {  TLanguage, TTransition } from '@/types/app.type'

export interface ITheme {
  isDark: boolean
  isCompact: boolean
  language: 'fa' | 'en'
  fullscreen: boolean
  fullContent: boolean
  transition: 'fade' | 'slide' | 'zoom' | 'none'
}
