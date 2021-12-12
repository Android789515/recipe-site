import React from 'react'
import { useRecoilState } from 'recoil'

import styles from '../../../../styles/modals/add-recipe/buttons/AddRecipeBtn.module.scss'
import { generalInfoData, ingredientsData, stepsData } from '../../../../atoms/recipeInfo'

import Button from '../../../generic-components/Button'

const AddRecipeBtn = () => {
    const [ generalRecipeInfo ] = useRecoilState(generalInfoData)
    const [ recipeIngredients ] = useRecoilState(ingredientsData)
    const [ recipeSteps ] = useRecoilState(stepsData)

    const submitRecipeInfo = () => {
        console.log('General info: ', generalRecipeInfo)
        console.log('Ingredients: ', recipeIngredients)
        console.log('Steps: ', recipeSteps)
    }

    return (
        <Button>
            <p className={styles.text} onClick={submitRecipeInfo}>
                <span className={styles.spacedText}>Add</span> Recipe
            </p>
        </Button>
    )
}

export default AddRecipeBtn