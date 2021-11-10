import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import LoginInput from '../components/forms-and-inputs/LoginInput'
import LoginForm from '../components/forms-and-inputs/LoginForm'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recipe Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div style={{ width: '18%', margin: '1em' }}>
            <LoginForm />
        </div>
    </div>
  )
}

export default Home
