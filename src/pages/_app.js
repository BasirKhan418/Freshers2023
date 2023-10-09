import '@/styles/globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { useEffect } from 'react';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("preline");
  }, []);
  return <><Navbar/><Component {...pageProps} /><Footer/> </>
}
