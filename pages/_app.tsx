import './../styles/global.scss';
import "./../node_modules/bootstrap/scss/bootstrap.scss";
import type { AppProps } from "next/app";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" integrity="sha384- 
          EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      </Head>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
      crossOrigin="anonymous"></script>

      <Component {...pageProps} />)
    </>
  )
}
