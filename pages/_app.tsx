import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'

import { UserProvider } from '../context/userContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <UserProvider>
          <RecoilRoot>
              <Component {...pageProps} />
          </RecoilRoot>
      </UserProvider>
  )
}

export default MyApp