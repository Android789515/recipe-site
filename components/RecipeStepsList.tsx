import React, { useState } from 'react'

import AddRecipeInfo from './modals/add-recipe/add-recipe-info/AddRecipeInfo'
import RecipeStep from './RecipeStep'
import AddRecipeStep from './modals/add-recipe/add-recipe-info/AddRecipeStep'

interface Props {

}

const RecipeStepsList = ({  }: Props) => {
    interface RecipeStep {
        entryId: string
        text: string
    }

    const [ recipeSteps, updateRecipeSteps ] = useState<RecipeStep[]>([])

    const removeRecipeStep = (recipeStepId: string) => updateRecipeSteps(prevRecipeSteps => {
        return prevRecipeSteps.filter(recipeStep => recipeStep.entryId !== recipeStepId)
    })

    const recipeStepEntries = recipeSteps.map((recipeStep, index) => {
        const { entryId, text } = recipeStep
        return (
            <RecipeStep entryId={entryId} index={index} text={text} />
        )
    })

    return (
        <div>
            <ul className={`unstyledUl`}>
                {recipeStepEntries}
            </ul>

            <AddRecipeInfo isAccentSection index={recipeSteps.length + 1}>
                {/* @ts-ignore */}
                <AddRecipeStep />
            </AddRecipeInfo>
        </div>
    )
}

export default RecipeStepsList