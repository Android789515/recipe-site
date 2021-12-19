import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import HeroSection from '../components/homepage/hero-section/HeroSection'
import AddRecipe from '../components/modals/add-recipe/AddRecipe'

const Home: NextPage = () => {

    return (
        <div>
            <Head>
                <title>Recipe Site</title>
                <link rel='icon' type='image/svg+xml' href='/favicon.svg'/>
            </Head>

            <div>
                <HeroSection />
            </div>

            <AddRecipe />
        {/*
            Hero section

            Categories section

            Footer
         */}
        </div>
    )
}

export default Home