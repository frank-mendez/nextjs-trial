import React, {useContext} from 'react'
import { Row, Col, Form, Input, Button, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { AuthContext } from '../../../src/contexts/AuthContext'

const Login = () => {

    const {emailLogin, loginLoading, errorMessage} = useContext(AuthContext)

    const onFinish = values => {
        console.log('Success:', values);
        emailLogin(values.username, values.password, '')
    };

    return (

        <Row style={{marginTop:'100px'}}>
            <Col span={8} offset={8}>
                {errorMessage &&
                    <Alert
                        message="Error"
                        description={errorMessage}
                        type="error"
                        showIcon
                        style={{marginBottom: '30px'}}
                    />
                }
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button loading={loginLoading} type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                    </Form.Item>
                    </Form>
            </Col>
        </Row>
        
    )
}

export default Login
