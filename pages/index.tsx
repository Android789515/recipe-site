import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Button from '../components/Button'
import NewRecipe from '../components/NewRecipe'
import LoginText from '../components/LoginText'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recipe Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Button><LoginText /></Button>

        <Button><NewRecipe /></Button>
    </div>
  )
}

export default Home
