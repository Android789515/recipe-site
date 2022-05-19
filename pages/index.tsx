import type { NextPage } from 'next'

import HeroSection from '../components/homepage/hero-section/HeroSection'
import CategoriesSection from '../components/homepage/categories-section/CategoriesSection'
import RecipeCalculatorWidget from '../components/modals/recipe-calculator/RecipeCalculatorWidget'

const Home: NextPage = () => {

    return (
        <div>
            <div>
                <HeroSection />

                <RecipeCalculatorWidget />

                <CategoriesSection />
            </div>
        </div>
    )
}

export default Home