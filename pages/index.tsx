import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import TestingContainer from '../components/TestingContainer'
import AddRecipe from '../components/modals/add-recipe/AddRecipe'


const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Recipe Site</title>
                <link rel='icon' type='image/svg+xml' href='/favicon.svg'/>
            </Head>

            <TestingContainer>
                <AddRecipe />
            </TestingContainer>
        </div>
    )
}

export default Home