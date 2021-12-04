import React, { useState } from 'react'

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

    const addIngredient = (ingredient: Ingredient) =>
        updateIngredients( (prevIngredients) => {
        return [...prevIngredients, ingredient]
    })

    const removeIngredient = (filterId: string) =>
        updateIngredients((prevIngredients) => {
        return prevIngredients.filter(ingredient => ingredient.id !== filterId)
    })

    const renderIngredientForms = ingredients.map((ingredient, index) => {
        return (
            <AddRecipeInfo index={index}>
                <IngredientForm updateIngredients={updateIngredients} />
            </AddRecipeInfo>
        )
    })

    return (
        <>
            {renderIngredientForms}

            <AddIngredientBtn />
        </>
    )
}

export default AddIngredients