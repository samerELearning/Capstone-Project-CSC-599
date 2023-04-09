import Navbar from '@/components/Navbar'
import { AuthContextProvider } from '@/stores/authContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
          <AuthContextProvider>
            <Navbar />
            <Component {...pageProps} />
          </AuthContextProvider>
  )
 
}
