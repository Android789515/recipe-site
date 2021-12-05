import React, { useState } from 'react'

import AddRecipeInfo from './modals/add-recipe/add-recipe-info/AddRecipeInfo'
import IngredientForm from './modals/add-recipe/add-recipe-info/IngredientForm'
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

    const ingredientEntries = ingredients.map((ingredient, index) => {
        const { entryId, name, calories } = ingredient
        return (
            <Ingredient key={entryId} entryId={entryId} index={index} name={name} calories={calories} />
        )
    })

    return (
        <div>
            <ul className={`unstyledUl`}>
                {ingredientEntries}
            </ul>
        </div>
    )
}

export default IngredientsList