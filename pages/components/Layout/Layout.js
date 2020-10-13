import {useContext} from 'react'
import { Layout } from 'antd';
import 'antd/dist/antd.css'
import LoginForm from '../Login/Login'
import Header from '../Header/Header'
import { AuthContext } from '../../contexts/AuthContext'

const {Content, Footer } = Layout;


export default function LayoutComponent() {

    const {isAuth} = useContext(AuthContext)

  return (
    <Layout className="layout">
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            {!isAuth ? (<LoginForm />) : 'Your are logged in'}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design</Footer>
      </Layout>
  )
}
