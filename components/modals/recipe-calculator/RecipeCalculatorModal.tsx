import React from 'react'
import { useRecoilState } from 'recoil'

import styles from '../../../styles/modals/recipe-calculator/RecipeCalculatorModal.module.scss'
import { recipeCalculatorState } from '../../../atoms/recipeCalculator'

import ControlledInputDropdown from '../../generic-components/forms-and-inputs/ControlledInputDropdown'

const RecipeCalculatorModal = () => {
    const [ { recipeName }, updateRecipeCalculatorData ] = useRecoilState(recipeCalculatorState)

    const updateRecipeSearchField = (event: React.ChangeEvent) => {
        const { value: recipeName } = event.target as HTMLInputElement
        updateRecipeCalculatorData(prevData => ({ ...prevData, recipeName }))
    }

    return (
        <div className={styles.recipeCalculator}>
            <h3 className={styles.title}>Try Our Recipe Calorie Calculator</h3>

            <ControlledInputDropdown
                customStyles={styles.searchField}
                value={recipeName}
                isRequired={true}
                placeholder={'Search or type a recipe name'}
                onChange={updateRecipeSearchField}
            />
        </div>
    )
}

export default RecipeCalculatorModal