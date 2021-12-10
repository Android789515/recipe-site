import React from 'react'

import styles from '../../../../styles/modals/add-recipe/add-recipe-info/IngredientForm.module.scss'
import inputStyles from '../../../../styles/modals/add-recipe/add-recipe-info/recipeInput.module.scss'

import inputTypes from '../../../../types/inputTypes'

import ControlledInput from '../../../generic-components/forms-and-inputs/ControlledInput'

const IngredientForm = () => {

    return (
        <div className={styles.inputs}>
            <ControlledInput
                className={inputStyles.recipeInput}
                name='ingredient-name'
                type={inputTypes.text}
                placeholder='Enter your Ingredient'
                required
            />
            <ControlledInput
                className={inputStyles.recipeInput}
                name='calories'
                type={inputTypes.text}
                placeholder='Calories'
                required={false}
            />
        </div>
    )
}

// @ts-ignore
export default IngredientForm