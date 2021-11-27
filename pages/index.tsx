import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
    const testContainerStyles = {
        display: 'grid',
        gridTemplateColumns: 'minmax(1em, 1fr) auto minmax(1em, 1fr)',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Recipe Site</title>
                <link rel='icon' type='image/svg+xml' href='/favicon.svg'/>
            </Head>

            <div style={testContainerStyles} className='test-container'>
            </div>
        </div>
    )
}

export default Home