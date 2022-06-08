import '../styles/globals.scss'
import '../styles/reload.scss'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {


  return <Component {...pageProps} />
}

export default MyApp
