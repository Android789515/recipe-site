import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import styles from '../../../styles/modals/add-recipe/AddIngredients.module.scss'
import { range } from '../../../utils/mathUtils'

import AddRecipeInfo from './AddRecipeInfo'
import IngredientForm from './IngredientForm'
import AddIngredientBtn from './AddIngredientBtn'

const AddIngredients = ({  }) => {
    interface Ingredient {
        id: string
        name: string,
        calories: number
    }

    const [ ingredients, updateIngredients ] = useState<Ingredient[]>([])

    const [ ingredientForms, setIngredientForms ] = useState(1)
    const addIngredientForm = () => setIngredientForms(prevForms => prevForms + 1)
    const removeIngredientForm = () => setIngredientForms(prevForms => prevForms - 1)

    const eachIngredientForm = range(1, ingredientForms)

    const renderIngredientForms = eachIngredientForm.map((formNumber) => {
        return (
            <AddRecipeInfo key={uuid()} index={formNumber} removeSelf={removeIngredientForm}>
                <IngredientForm updateIngredients={updateIngredients} />
            </AddRecipeInfo>
        )
    })

    return (
        <>
            <div className={styles.ingredientForms}>
                {renderIngredientForms}
            </div>

            <AddIngredientBtn addIngredientForm={addIngredientForm} />
        </>
    )
}

export default AddIngredients