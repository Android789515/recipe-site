import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import RecipeStepsList from '../components/RecipeStepsList'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recipe Site</title>
          <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </Head>

        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <RecipeStepsList />
        </div>
    </div>
  )
}

export default Home
