import '../styles/globals.css'
import 'antd/dist/antd.css'
import AuthContextProvider from '../src/contexts/AuthContext'


function MyApp({ Component, pageProps }) {
  return (
    
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
