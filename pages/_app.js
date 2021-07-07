import '../styles/globals.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MainLayout from '../Components/Layout/MainLayout'
function MyApp({ Component, pageProps }) {
  return <MainLayout><Component {...pageProps} /></MainLayout> 
}

export default MyApp
