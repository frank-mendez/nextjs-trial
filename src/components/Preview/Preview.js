import { Layout, Row, Col, Menu, Image } from 'antd';
import Header from '../Header/Header'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const {Content, Footer } = Layout;


export default function Admin() {
  
    const { SubMenu } = Menu;
    
  return (
    <Layout className="layout">
        <Header />
        <Content style={{ padding: '0 50px' }}>
            <Row>
                <Col span={24}>
                    <Menu selectedKeys={['mail']} mode="horizontal">
                    <Menu.Item key="app" icon={<AppstoreOutlined />}>
                            Home
                    </Menu.Item>
                        <Menu.Item key="app"  icon={<AppstoreOutlined />}>
                            About
                    </Menu.Item>
                        <Menu.Item key="app" icon={<AppstoreOutlined />}>
                    Promo
                    </Menu.Item>
                    <Menu.Item key="mail" icon={<MailOutlined />}>
                    Contact
                    </Menu.Item>
                </Menu>
                </Col>
              </Row>
              <Row style={{backgroundColor: '#67AAF9', padding: '100px 50px'}}>
                  <Col  span={12}>
                    <h1 style={{fontFamily: 'Roboto', fontSize: '30px', color: 'white'}}>THE SIMPLER WAY TO SELL</h1>
                  </Col>
                  <Col  span={12}>
                    <Image
                        width={600}
                        src="https://www.clipartmax.com/png/full/247-2471543_our-business-attitude-landing-page-illustrations.png"
                        />
                  </Col>
              </Row>
              <Row style={{backgroundColor: '#C4E0F9', padding: '100px 50px'}}>
                  <Col  span={8}>
                    <Image
                        width={300}
                        src="https://www.clipartmax.com/png/full/110-1103119_landing-page-landing-page.png"
                      />
                      <h2 style={{fontFamily: 'Roboto', fontSize: '25px', color: 'white'}}>Lorem Ipsum</h2>
                  </Col>
                  <Col  span={8}>
                    <Image
                        width={300}
                        src="https://www.clipartmax.com/png/full/440-4402871_get-started-web-design-agency-landing-page.png"
                      />
                       <h2 style={{fontFamily: 'Roboto', fontSize: '25px', color: 'white'}}>Lorem Ipsum</h2>
                  </Col>
                  <Col  span={8}>
                    <Image
                        width={300}
                        src="https://www.clipartmax.com/png/full/110-1102792_crear-landing-page-digital-marketing-business-growth.png"
                      />
                       <h2 style={{fontFamily: 'Roboto', fontSize: '25px', color: 'white'}}>Lorem Ipsum</h2>
                  </Col>
              </Row>
              <Row style={{backgroundColor: '#B95F89', padding: '100px 50px'}}>
                  <Col  span={12}>
                    <h1>THE SIMPLER WAY TO SELL</h1>
                  </Col>
                  <Col  span={12}>
                    <Image
                        width={600}
                        src="https://www.clipartmax.com/png/full/247-2471543_our-business-attitude-landing-page-illustrations.png"
                        />
                  </Col>
              </Row>
              <Row style={{backgroundColor: '#2EC0F9', padding: '100px 50px'}}>
                  <Col  span={12}>
                    <h1>THE SIMPLER WAY TO SELL</h1>
                  </Col>
                  <Col  span={12}>
                    <Image
                        width={600}
                        src="https://www.clipartmax.com/png/full/247-2471543_our-business-attitude-landing-page-illustrations.png"
                        />
                  </Col>
              </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design</Footer>
      </Layout>
  )
}
