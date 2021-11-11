import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import LoginInput from '../components/forms-and-inputs/LoginInput'
import LoginForm from '../components/forms-and-inputs/LoginForm'
import Button from '../components/generic-components/Button'
import LoginText from '../components/LoginText'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recipe Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}

export default Home
