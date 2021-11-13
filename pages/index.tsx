import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import LoginInput from '../components/forms-and-inputs/LoginInput'
import LoginForm from '../components/forms-and-inputs/LoginForm'
import Button from '../components/generic-components/Button'
import LoginText from '../components/LoginText'
import IngredientsList from '../components/IngredientsList'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recipe Site</title>
          <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </Head>

        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <IngredientsList />
        </div>
    </div>
  )
}

export default Home
