import { BorderOutlined, LayoutOutlined } from '@ant-design/icons'
import { Button, Flex, Layout, Tabs } from 'antd'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

const PanelContnet = () => {
  const [isFullContnet, setIsFullContent] = useState(false)

  return (
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
  )
}
export default PanelContnet
