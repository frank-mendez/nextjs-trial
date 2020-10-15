import {useContext, useEffect, useRef} from 'react'
import { Layout, Row, Col } from 'antd';
import Header from '../Header/Header'
import { AuthContext } from '../../../src/contexts/AuthContext'
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { useRouter } from 'next/router'
import * as typeformEmbed from '@typeform/embed'

const {Content, Footer } = Layout;


export default function Admin() {
    const typeformRef = useRef(null);
    const router = useRouter()
    const { isAuth } = useContext(AuthContext)
  

    useEffect(() => {
        typeformEmbed.makeWidget(typeformRef.current, 'https://frankmendezwebdev.typeform.com/to/bfDayWzh', {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0,
        onSubmit: function (event) {
            router.push('/preview')
        },
        });
    }, [typeformRef])

  return (
   <Row gutter={[16, 16]}>
      <Col span={12} offset={6}>
          <div ref={typeformRef} style={{ height: '100vh', width: '100%'}}></div>
      </Col>
  </Row>
  )
}
