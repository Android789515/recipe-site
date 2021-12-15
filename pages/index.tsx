import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Recipe Site</title>
                <link rel='icon' type='image/svg+xml' href='/favicon.svg'/>
            </Head>

        {/*
            Hero section

            Categories section

            Footer
         */}
        </div>
    )
}

export default Home