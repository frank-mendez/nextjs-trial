import React from 'react'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import AuthContextProvider from '../../src/contexts/AuthContext'
import AdminContainer from '../../src/components/Admin/Admin'

const { Header, Content, Footer, Sider } = Layout;

const index = () => {
    return (
        <AdminContainer />
    )
}

export default index
