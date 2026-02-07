import { useAuthStore } from '@/stores/auth-store'
import { useThemeStore } from '@/stores/theme-store'
import {
  BorderOutlined,
  DashboardOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  LayoutOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import {
  Avatar,
  Button,
  Card,
  Drawer,
  Dropdown,
  Flex,
  Layout,
  Menu,
  Segmented,
  Space,
  Tabs,
  theme,
  Typography
} from 'antd'
import { useRef, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const { Header, Sider, Content } = Layout
const { Text } = Typography
const { useToken } = theme

const PanelLayout = () => {
  const { token } = useToken()
  const themeStore = useThemeStore()
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { logout, user } = useAuthStore()
  const layoutRef = useRef<HTMLElement | null>(null)

  const menuItems: MenuProps['items'] = [
    {
      key: '/',
      icon: <DashboardOutlined />,
      label: 'Dashboard'
    },
    {
      key: '/users',
      icon: <UserOutlined />,
      label: 'Users'
    }
  ]

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key)
  }

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
  const [isFullContnet, setIsFullContent] = useState(false)

  const primaryColorOptions = [
    { label: 'Blue', value: '#1677ff' },
    { label: 'Cyan', value: '#13c2c2' },
    { label: 'Green', value: '#52c41a' },
    { label: 'Purple', value: '#722ed1' },
    { label: 'Orange', value: '#fa8c16' }
  ].map(({ label: name, value: hex }) => ({
    value: hex,
    label: (
      <span
        style={{
          display: 'inline-block',
          width: '100%',
          height: 'var(--ant-control-height)',
          borderRadius: token.borderRadiusSM,
          backgroundColor: hex,
          border: `1px solid ${token.colorBorder}`
        }}
        title={name}
      />
    )
  }))

  return (
    <Layout ref={layoutRef} className="h-screen!">
      <Header>
        <Flex justify="space-between" align="center">
          <Space>
            {collapsed ? (
              <MenuUnfoldOutlined onClick={() => setCollapsed(false)} />
            ) : (
              <MenuFoldOutlined onClick={() => setCollapsed(true)} />
            )}
          </Space>
          <Space>
            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
              <Space>
                <Avatar icon={<UserOutlined />} />
                <Text>{user?.username || 'User'}</Text>
              </Space>
            </Dropdown>
            <Button
              icon={themeStore.fullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
              onClick={() => themeStore.toggleFullscreen()}
            />
            <Button icon={<SettingOutlined />} onClick={() => setIsSettingOpen(true)} />
            <Drawer
              title="تنظیمات"
              open={isSettingOpen}
              onClose={() => setIsSettingOpen(false)}
              styles={{ body: { paddingBlockStart: token.marginSM } }}
              placement={themeStore.direction === 'ltr' ? 'right' : 'left'}
            >
              <Space orientation="vertical" style={{ width: '100%' }}>
                <Card title="Primary color">
                  <Segmented
                    block
                    options={primaryColorOptions}
                    value={themeStore.token?.colorPrimary ?? token.colorPrimary}
                    styles={{ label: { padding: token.paddingXS } }}
                    onChange={value => themeStore.setToken({ colorPrimary: value as string })}
                  />
                </Card>
                <Card title="Is Dark">
                  <Segmented
                    block
                    options={[
                      { label: 'True', value: true },
                      { label: 'False', value: false }
                    ]}
                    value={themeStore.isDark}
                    onChange={(value: boolean) => themeStore.setIsDark(value)}
                  />
                </Card>
                <Card title="Is compact">
                  <Segmented
                    block
                    options={[
                      { label: 'True', value: true },
                      { label: 'False', value: false }
                    ]}
                    value={themeStore.isCompact}
                    onChange={(value: boolean) => themeStore.setIsCompact(value)}
                  />
                </Card>
                <Card title="components size">
                  <Segmented
                    block
                    options={[
                      { label: 'Small', value: 'small' },
                      { label: 'Middle', value: 'middle' },
                      { label: 'Large', value: 'large' }
                    ]}
                    value={themeStore.componentSize ?? 'middle'}
                    onChange={(value: string) =>
                      themeStore.setComponentSize(value as 'small' | 'middle' | 'large')
                    }
                  />
                </Card>
                <Card title="language">
                  <Segmented
                    block
                    options={[
                      { label: 'Fa', value: 'fa' },
                      { label: 'En', value: 'en' }
                    ]}
                    value={themeStore.language}
                    onChange={(value: string) => {
                      if (value !== themeStore.language) themeStore.toggleLanguage()
                    }}
                  />
                </Card>
                <Card title="font size">
                  <Segmented
                    block
                    options={[
                      { label: '12', value: '12' },
                      { label: '14', value: '14' },
                      { label: '16', value: '16' },
                      { label: '18', value: '18' },
                      { label: '20', value: '20' }
                    ]}
                    value={themeStore.token?.fontSize?.toString()}
                    onChange={(value: string) => {
                      if (value !== themeStore.token?.fontSize?.toString())
                        themeStore.setToken({ fontSize: parseInt(value, 10) })
                    }}
                  />
                </Card>
                <Card title="boder radius">
                  <Segmented
                    block
                    options={[
                      { label: '0', value: '0' },
                      { label: '3', value: '3' },
                      { label: '6', value: '6' },
                      { label: '9', value: '9' },
                      { label: '12', value: '12' },
                      { label: '15', value: '15' },
                      { label: '18', value: '18' }
                    ]}
                    value={themeStore.token?.borderRadius?.toString()}
                    onChange={(value: string) => {
                      if (value !== themeStore.token?.borderRadius?.toString())
                        themeStore.setToken({ borderRadius: parseInt(value, 10) })
                    }}
                  />
                </Card>
              </Space>
            </Drawer>
          </Space>
        </Flex>
      </Header>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} width={200}>
          <Flex vertical align="center" justify="center">
            <Text strong={!collapsed} ellipsis>
              {collapsed ? 'AP' : 'Antd Panel'}
            </Text>
          </Flex>
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={handleMenuClick}
          />
        </Sider>
        <Content>
          <Flex justify="space-between" align="center">
            <Tabs
              items={[
                { key: '1', label: 'Tab 1' },
                { key: '2', label: 'Tab 2' }
              ]}
              type="editable-card"
              hideAdd
              tabBarStyle={{
                margin: 0
              }}
              size="small"
            />
            <Button
              size="small"
              icon={isFullContnet ? <BorderOutlined /> : <LayoutOutlined />}
              onClick={() => setIsFullContent(!isFullContnet)}
            />
          </Flex>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default PanelLayout
