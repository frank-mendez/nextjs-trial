import {useContext, useEffect} from 'react'
import { Layout } from 'antd';
import LoginForm from '../Login/Login'
import Header from '../Header/Header'
import { AuthContext } from '../../../src/contexts/AuthContext'
import { useRouter } from 'next/router'

const {Content, Footer } = Layout;


export default function LayoutComponent() {
  const router = useRouter()

  const { isAuth } = useContext(AuthContext)
  
  useEffect(() => {
    if (isAuth) {
      router.push('/admin')
    }
  }, [])

  return (
    <Layout className="layout">
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <LoginForm />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design</Footer>
      </Layout>
  )
}
