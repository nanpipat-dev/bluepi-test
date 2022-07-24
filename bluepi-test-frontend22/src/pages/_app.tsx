import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalProvider } from '@/hooks/Global/GlobalContext'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp
