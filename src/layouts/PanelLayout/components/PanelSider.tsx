import { DashboardOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const { Sider } = Layout

const PanelSider = () => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
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

  return (
    <Sider collapsible collapsed={collapsed} width={300} onCollapse={setCollapsed}
    
    
    >
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={handleMenuClick}
        className="h-full!"
      />
    </Sider>
  )
}
export default PanelSider
