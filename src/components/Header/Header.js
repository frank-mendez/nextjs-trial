import { useContext } from 'react'
import 'antd/dist/antd.css'
import { AuthContext } from '../../../src/contexts/AuthContext'
import { Layout, Menu } from 'antd';

const { Header } = Layout;


export default function HeaderLayout(props) {

    const { isAuth, signOut } = useContext(AuthContext)
    
    const logout = () => {
        signOut()
    }

  return (
    <Header>
        <div className="logo" />
         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Products</Menu.Item>
            <Menu.Item key="3">Pages</Menu.Item>
            <Menu.Item onClick={() => logout()} key="4">Logout</Menu.Item>
          </Menu>
    </Header>
  )
}
