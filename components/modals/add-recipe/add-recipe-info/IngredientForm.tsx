import React from 'react'

import styles from '../../../../styles/modals/add-recipe/add-recipe-info/IngredientForm.module.scss'
import inputStyles from '../../../../styles/modals/add-recipe/add-recipe-info/recipeInput.module.scss'

import inputTypes from '../../../../types/inputTypes'

import ControlledInput from '../../../generic-components/forms-and-inputs/ControlledInput'

interface Props {
    nameValue: string
    caloriesValue: number
    nameOnChange: React.ChangeEventHandler
    caloriesOnChange: React.ChangeEventHandler
}

const IngredientForm = ({ nameValue, nameOnChange, caloriesValue, caloriesOnChange }: Props) => {

    return (
        <div className={styles.inputs}>
            <ControlledInput
                className={inputStyles.recipeInput}
                name='ingredient-name'
                type={inputTypes.text}
                placeholder='Enter your Ingredient'
                required
                value={nameValue}
                onChange={nameOnChange}
            />
            <ControlledInput
                className={inputStyles.recipeInput}
                name='calories'
                type={inputTypes.number}
                placeholder='Calories'
                required={false}
                value={String(caloriesValue)}
                onChange={caloriesOnChange}
            />
        </div>
    )
}

export default IngredientForm