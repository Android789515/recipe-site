import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import styles from '../../../../styles/modals/add-recipe/add-recipe-info/AddIngredients.module.scss'
import { range } from '../../../../utils/mathUtils'

import AddRecipeInfo from './AddRecipeInfo'
import IngredientForm from './IngredientForm'
import AddRecipeInfoBtn from './AddRecipeInfoBtn'

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

            <AddRecipeInfoBtn info={'Ingredient'} addForm={addIngredientForm} />
        </>
    )
}

export default AddIngredients