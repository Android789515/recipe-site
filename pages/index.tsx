import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/homepage/Home.module.scss'

import HeroSection from '../components/homepage/hero-section/HeroSection'
import AddRecipeModal from '../components/modals/add-recipe/AddRecipeModal'
import CategoriesSection from '../components/homepage/categories-section/CategoriesSection'
import RecipeCalculatorModal from '../components/modals/recipe-calculator/RecipeCalculatorModal'

const Home: NextPage = () => {

    return (
        <div>
            <Head>
                <title>Recipe Site</title>
                <link rel='icon' type='image/svg+xml' href='/favicon.svg'/>
            </Head>

            <div>
                <HeroSection />

                <RecipeCalculatorModal />

                <CategoriesSection />
            </div>

            <AddRecipeModal />
        {/*
            Hero section

            Categories section

            Footer
         */}
        </div>
    )
}

export default Home