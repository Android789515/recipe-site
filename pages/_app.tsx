import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'

import { UserDataProvider } from '../context/userDataContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <UserDataProvider>
          <RecoilRoot>
              <Component {...pageProps} />
          </RecoilRoot>
      </UserDataProvider>
  )
}

export default MyApp