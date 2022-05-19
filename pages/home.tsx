import { NextPage } from 'next'

import HeroSection from '../components/homepage/hero-section/HeroSection'
import RecipeCalculatorWidget from '../components/modals/recipe-calculator/RecipeCalculatorWidget'
import CategoriesSection from '../components/homepage/categories-section/CategoriesSection'

const Home: NextPage = () => {
    return (
        <div>
            <HeroSection />

            <RecipeCalculatorWidget />

            <CategoriesSection />
        </div>
    )
}

export default Home