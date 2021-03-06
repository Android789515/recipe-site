import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useRecoilState } from 'recoil'

import styles from '../../../../styles/modals/add-recipe/add-recipe-info/AddRecipeForms.module.scss'
import { Id, ingredientsData, generalInfoData } from '../../../../atoms/recipeInfo'
import { sum } from '../../../../utils/mathUtils'

import AddRecipeInfoBtn from './AddRecipeInfoBtn'
import AddRecipeInfo from './AddRecipeInfo'
import IngredientForm from './IngredientForm'

const AddIngredients = () => {


    const [ ingredients, updateIngredients ] = useRecoilState(ingredientsData)

    const addIngredient = () => {
        updateIngredients(prevIngredients => {
            return [...prevIngredients, { id: uuid(), name: '', calories: '' }]
        })
    }
    const removeIngredient = (filterId: Id) => {
        updateIngredients(prevIngredients => {
            return prevIngredients.filter(ingredient => ingredient.id !== filterId)
        })
    }

    const [ activeForm, setActiveForm ] = useState<Id>('')
    const [ activeInput, setActiveInput ] = useState('')
    const inputs = {
        name: 'name',
        calories: 'calories'
    }

    const updateName = (ingredientId: Id, event: React.ChangeEvent) => {
        const { value: name } = event.target as HTMLInputElement

        setActiveForm(ingredientId)
        setActiveInput(inputs.name)
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

        setActiveForm(ingredientId)
        setActiveInput(inputs.calories)
        updateIngredients(prevIngredients => {
            return prevIngredients.map(ingredient => {
                if (ingredient.id === ingredientId) {
                    return { ...ingredient, calories: calories }
                }

                return ingredient
            })
        })
    }

    const ingredientForms = ingredients.map((ingredient, index) => {
        index = index + 1 // Start counting from one
        return (
            <AddRecipeInfo
                key={uuid()}
                index={index}
                removeSelf={() => removeIngredient(ingredient.id)}
            >
                <IngredientForm
                    isActiveForm={activeForm === ingredient.id}
                    activeInput={activeInput}
                    nameValue={ingredient.name}
                    caloriesValue={ingredient.calories}
                    nameOnChange={event => updateName(ingredient.id, event)}
                    caloriesOnChange={event => updateCalories(ingredient.id, event)}
                />
            </AddRecipeInfo>
        )
    })

    const [ irrelevant, updateGeneralInfo ] = useRecoilState(generalInfoData)
    const calculateTotalCalories = () => {
        const calories = ingredients.map(ingredient => Number(ingredient.calories))
        const totalCalories = sum(calories)
        updateGeneralInfo(prevInfo => ({ ...prevInfo, totalCalories }))
    }

    useEffect(calculateTotalCalories, [ingredients])

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