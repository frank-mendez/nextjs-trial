import AuthContextProvider from './contexts/AuthContext'
import LayoutContainer from './components/Layout/Layout'


export default function Home(props) {

  return (
    <AuthContextProvider>
       <LayoutContainer />
    </AuthContextProvider>
  )
}
