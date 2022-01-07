import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/homepage/Home.module.scss'

import HeroSection from '../components/homepage/hero-section/HeroSection'
import CategoriesSection from '../components/homepage/categories-section/CategoriesSection'
import RecipeCalculatorWidget from '../components/modals/recipe-calculator/RecipeCalculatorWidget'
import AddRecipeModal from '../components/modals/add-recipe/AddRecipeModal'

const Home: NextPage = () => {

    return (
        <div>
            <Head>
                <title>Recipe Site</title>
                <link rel='icon' type='image/svg+xml' href='/favicon.svg'/>
            </Head>

            <div>
                <HeroSection />

                <RecipeCalculatorWidget />

                <CategoriesSection />
            </div>
        </div>
    )
}

export default Home