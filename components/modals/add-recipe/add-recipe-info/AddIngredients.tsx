import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import styles from '../../../../styles/modals/add-recipe/add-recipe-info/AddRecipeForms.module.scss'
import AddRecipeInfoBtn from './AddRecipeInfoBtn'
import AddRecipeInfo from './AddRecipeInfo'
import IngredientForm from './IngredientForm'

const AddIngredients = ({  }) => {
    type Id = string

    interface Ingredient {
        id: Id
        name: string,
        calories: number
    }

    const [ ingredients, updateIngredients ] = useState<Ingredient[]>([])
    const [ activeForm, setActiveForm ] = useState<Id>()

    const addIngredient = () => {
        updateIngredients(prevIngredients => {
            return [...prevIngredients, { id: uuid(), name: '', calories: 0 }]
        })
    }
    const removeIngredient = (filterId: Id) => {
        updateIngredients(prevIngredients => {
            return prevIngredients.filter(ingredient => ingredient.id !== filterId)
        })
    }

    const updateName = (ingredientId: Id, event: React.ChangeEvent) => {
        const { value: name } = event.target as HTMLInputElement

        updateIngredients(prevIngredients => {
            return prevIngredients.map(ingredient => {
                if (ingredient.id === ingredientId) {
                    return { ...ingredient, name }
                }

                return ingredient
            })
        })
    }

    const updateCalories = (ingredientId: Id, event: React.ChangeEvent) => {
        const { value: calories } = event.target as HTMLInputElement
        if (!Number(calories) && Number(calories) !== 0) return

        updateIngredients(prevIngredients => {
            return prevIngredients.map(ingredient => {
                if (ingredient.id === ingredientId) {
                    return { ...ingredient, calories: Number(calories) }
                }

                return ingredient
            })
        })
    }

    const ingredientForms = ingredients.map((ingredient, index) => {
        index = index + 1 // Start counting from one
        return (
            <AddRecipeInfo
                index={index}
                removeSelf={() => removeIngredient(ingredient.id)}
            >
                <IngredientForm
                    nameValue={ingredient.name}
                    caloriesValue={ingredient.calories}
                    nameOnChange={event => updateName(ingredient.id, event)}
                    caloriesOnChange={event => updateCalories(ingredient.id, event)}
                />
            </AddRecipeInfo>
        )
    })

    return (
        <>
            <div className={styles.forms}>
                {ingredientForms}
            </div>

            <AddRecipeInfoBtn info={'Ingredient'} addForm={addIngredient} />
        </>
    )
}

export default AddIngredients