import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'

import { UserDataProvider } from '../hooks/user-auth/userDataContext'

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