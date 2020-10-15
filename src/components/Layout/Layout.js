import useToggle from '../../hooks/useToggle'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  HomeOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/router'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function LayoutComponent({ signOut }) {
  const router = useRouter()
  const [collapsed, onCollapse] = useToggle(false)
  const handleCreate = () => {
    router.push('/create')
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item onClick={() => handleCreate()} key="2" icon={<SettingOutlined />}>
              Create
            </Menu.Item>
            <SubMenu key="sub1" icon={<DesktopOutlined />} title="Websites">
              <Menu.Item key="3">Website 1</Menu.Item>
              <Menu.Item key="4">Website 2</Menu.Item>
              <Menu.Item key="5">Website 3</Menu.Item>
            </SubMenu>
            <Menu.Item onClick={() => signOut()} key="6" icon={<LogoutOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px', paddingTop: 20 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Welcome
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Exparent</Footer>
        </Layout>
      </Layout>
  )
}
