import React from 'react'

import styles from '../../../styles/main-components/add-recipe/AddIngredient.module.scss'
import inputStyles from '../../../styles/main-components/add-recipe/recipeInput.module.scss'

import inputTypes from '../../../types/inputTypes'

import ControlledInput from '../../generic-components/ControlledInput'

interface Props {
    updateIngredients: Function,
    shouldResetInputs: boolean
}

interface Ingredient {
    entryId: string
    name: string,
    calories: number
}

const AddIngredient = ({ updateIngredients, shouldResetInputs }: Props) => {

    const addIngredient = (ingredient: Ingredient) => updateIngredients( (prevIngredients: Ingredient[]) => {
        return [...prevIngredients, ingredient]
    })

    return (
        <div className={styles.inputs}>
            <ControlledInput
                className={inputStyles.recipeInput}
                name='ingredient-name'
                type={inputTypes.text}
                placeholder='Enter your Ingredient'
                required
                shouldResetInputs={shouldResetInputs}
            />
            <ControlledInput
                className={inputStyles.recipeInput}
                name='calories'
                type={inputTypes.text}
                placeholder='Calories'
                required={false}
                shouldResetInputs={shouldResetInputs}
            />
        </div>
    )
}

export default AddIngredient