import React, { useState } from 'react'

import AddRecipeInfo from './forms-and-inputs/AddRecipeInfo'
import AddIngredient from './forms-and-inputs/AddIngredient'
import Ingredient from './Ingredient'

interface Props {

}

const IngredientsList = ({  }: Props) => {
    interface Ingredient {
        entryId: string
        name: string,
        calories: number
    }

    const [ ingredients, updateIngredients ] = useState<Ingredient[]>([])

    const removeIngredient = (ingredientId: string) => updateIngredients(prevIngredients => {
        return prevIngredients.filter(ingredient => ingredient.entryId !== ingredientId)
    })

    const ingredientEntries = ingredients.map(ingredient => {
        const { entryId, name, calories } = ingredient
        return (
            <Ingredient key={entryId} entryId={entryId} name={name} calories={calories} />
        )
    })

    return (
        <div>
            <ul className={`unstyled-ul`}>
                {ingredientEntries}
            </ul>

            <AddRecipeInfo index={ingredients.length + 1}>
                <AddIngredient updateIngredients={updateIngredients} />
            </AddRecipeInfo>
        </div>
    )
}

export default IngredientsList