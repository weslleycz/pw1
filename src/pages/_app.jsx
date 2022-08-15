import '../styles/globals.scss'
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Header></Header>
    <Component {...pageProps} />
    </>)
  
}

export default MyApp
