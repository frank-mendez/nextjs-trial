import AuthContextProvider from '../src/contexts/AuthContext'
import LayoutContainer from '../src/components/Layout/Layout'


export default function Home(props) {

  return (
    <AuthContextProvider>
       <LayoutContainer />
    </AuthContextProvider>
  )
}
