import React from 'react'

import styles from '../../styles/forms-and-inputs/AddIngredient.module.scss'

interface Props {
    updateIngredients: Function
}

interface Ingredient {
    entryId: string
    name: string,
    calories: number
}

const AddIngredient = ({ updateIngredients }: Props) => {
    const addIngredient = (ingredient: Ingredient) => updateIngredients( (prevIngredients: Ingredient[]) => {
        return [...prevIngredients, ingredient]
    })

    return (
        <div className={styles.inputs}>
            <input
                className={`unstyledInput ${styles.input}`}
                name='ingredient-name'
                placeholder='Enter your Ingredient'
                required
            />
            <input className={`unstyledInput ${styles.input}`} name='calories' placeholder='Calories' />
        </div>
    )
}

export default AddIngredient