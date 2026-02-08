import { useAuthStore } from '@/stores/auth.store'
import { useThemeStore } from '@/stores/theme.store'
import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Avatar, Button, Dropdown, Flex, Layout, Space, Tooltip, Typography } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PanelSettings from './PanelSettings'

const { Header } = Layout
const { Text } = Typography

const PanelHeader = () => {
  const themeStore = useThemeStore()
  const navigate = useNavigate()
  const { logout, user } = useAuthStore()

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile'
    },
    {
      type: 'divider'
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      danger: true,
      onClick: () => {
        logout()
        navigate('/auth/login')
      }
    }
  ]

  const [isSettingOpen, setIsSettingOpen] = useState(false)

  return (
    <Header>
      <Flex justify="space-between" align="center">
        <Text ellipsis>Antd Panel</Text>
        <Space>
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <Space>
              <Avatar icon={<UserOutlined />} />
              <Text>{user?.username || 'User'}</Text>
            </Space>
          </Dropdown>
          <Tooltip title={themeStore.fullscreen ? 'Exit fullscreen' : 'Fullscreen'}>
            <Button
              icon={themeStore.fullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
              onClick={() => themeStore.toggleFullscreen()}
            />
          </Tooltip>
          <Tooltip title="Settings">
            <Button icon={<SettingOutlined />} onClick={() => setIsSettingOpen(true)} />
          </Tooltip>
          <PanelSettings isSettingOpen={isSettingOpen} setIsSettingOpen={setIsSettingOpen} />
        </Space>
      </Flex>
    </Header>
  )
}
export default PanelHeader
