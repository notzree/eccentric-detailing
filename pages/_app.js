import '@/styles/globals.css'
import toast, { Toaster } from 'react-hot-toast';
export default function App({ Component, pageProps }) {

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Pathway+Extreme&display=swap" rel="stylesheet" />
      <Component {...pageProps} />
      <Toaster />
    </>
  )

}
