import '@/styles/globals.css'
import Navbar from './components/Navbar'
import { useEffect } from 'react';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("preline");
  }, []);
  return <><Navbar/><Component {...pageProps} /></>
}
