import { Layout } from 'antd'
import PanelContnet from './components/PanelContnet'
import PanelHeader from './components/PanelHeader'
import PanelSider from './components/PanelSider'

const PanelLayout = () => {
  return (
    <Layout className="h-screen!">
      <PanelHeader />
      <Layout>
        <PanelSider />
        <PanelContnet />
      </Layout>
    </Layout>
  )
}

export default PanelLayout
