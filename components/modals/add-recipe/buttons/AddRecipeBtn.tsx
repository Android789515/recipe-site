import React from 'react'
import { useRecoilState } from 'recoil'

import styles from '../../../../styles/modals/add-recipe/buttons/AddRecipeBtn.module.scss'
import recipeInfo from '../../../../atoms/recipeInfo'

import Button from '../../../generic-components/Button'

const AddRecipeBtn = () => {
    const [ info ] = useRecoilState(recipeInfo)

    const submitRecipeInfo = () => {
        console.log(info)
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