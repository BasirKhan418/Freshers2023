import '@/styles/globals.css'
import Navbar from './components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';
import { useEffect ,useState} from 'react';
import { useRouter } from 'next/router';
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    import("preline");
  }, []);
  useEffect(()=>{
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
  },[])
  useEffect(() => {
    import("preline");
  }, []);
  return <><LoadingBar
  color='yellow'
  waitingTime={400}
  progress={progress}
  onLoaderFinished={() => setProgress(0)}
/><Navbar/><Component {...pageProps} /><Footer/> </>
}
