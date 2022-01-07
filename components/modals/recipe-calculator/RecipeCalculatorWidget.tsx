import React from 'react'
import { useRecoilState } from 'recoil'

import styles from '../../../styles/modals/recipe-calculator/RecipeCalculatorWidget.module.scss'
import { recipeCalculatorState } from '../../../atoms/recipeCalculator'
import recipeIcon from '../../../public/assets/icons/calories-plus.svg'

import Image from '../../generic-components/Image'
import ControlledInputDropdown from '../../generic-components/forms-and-inputs/ControlledInputDropdown'

const RecipeCalculatorWidget = () => {
    const [ { recipeName }, updateRecipeCalculatorData ] = useRecoilState(recipeCalculatorState)

    const updateRecipeSearchField = (event: React.ChangeEvent) => {
        const { value: recipeName } = event.target as HTMLInputElement
        updateRecipeCalculatorData(prevData => ({ ...prevData, recipeName }))
    }

    return (
        <div className={styles.recipeCalculator}>
            <h3 className={styles.title}>Try Our Recipe Calorie Calculator</h3>

            <div className={styles.searchFieldLayout}>
                <Image className={styles.recipeIcon} src={recipeIcon} alt='' />

                <ControlledInputDropdown
                    customStyles={styles.searchField}
                    value={recipeName}
                    isRequired={true}
                    placeholder='Search or type a recipe name'
                    onChange={updateRecipeSearchField}
                />
            </div>
        </div>
    )
}

export default RecipeCalculatorWidget