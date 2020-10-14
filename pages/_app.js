import '../styles/globals.css'
import 'antd/dist/antd.css'
import AuthContextProvider from '../src/contexts/AuthContext'


function MyApp({ Component, pageProps }) {
  return (
    
    <AuthContextProvider>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
