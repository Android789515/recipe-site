import React from 'react'

import styles from '../../styles/forms-and-inputs/AddIngredient.module.scss'

import inputTypes from '../../types/inputTypes'

import ControlledInput from './ControlledInput'

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
                className={`unstyledInput ${styles.input}`}
                name='ingredient-name'
                type={inputTypes._text}
                placeholder='Enter your Ingredient'
                required
                shouldResetInputs={shouldResetInputs}
            />
            <ControlledInput
                className={`unstyledInput ${styles.input}`}
                name='calories'
                type={inputTypes._text}
                placeholder='Calories'
                required={false}
                shouldResetInputs={shouldResetInputs}
            />
        </div>
    )
}

export default AddIngredient