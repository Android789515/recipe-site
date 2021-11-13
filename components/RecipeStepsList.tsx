import React, { useState } from 'react'

import AddRecipeInfo from './forms-and-inputs/AddRecipeInfo'
import RecipeStep from './RecipeStep'
import AddRecipeStep from './forms-and-inputs/AddRecipeStep'

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

            <AddRecipeInfo index={recipeSteps.length + 1}>
                {/* @ts-ignore */}
                <AddRecipeStep />
            </AddRecipeInfo>
        </div>
    )
}

export default RecipeStepsList