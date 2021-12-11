import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useRecoilState } from 'recoil'

import widgetStyles from '../../../../styles/modals/add-recipe/AddRecipeWidget.module.scss'
import styles from '../../../../styles/modals/add-recipe/add-recipe-info/AddRecipeForms.module.scss'
import recipeInfo from '../../../../atoms/recipeInfo'

import AddRecipeInfoBtn from './AddRecipeInfoBtn'
import StepForm from './StepForm'
import AddRecipeInfo from './AddRecipeInfo'

const AddSteps = () => {
    type Id = string

    interface Step {
        id: Id
        textContent: string
    }

    const [ steps, updateSteps ] = useState<Step[]>([])
    const [ activeForm, setActiveForm ] = useState<Id>()

    const addForm = () => {
        updateSteps(prevFormsData => {
            return [...prevFormsData, { id: uuid(), textContent: '' }]
        })
    }
    const removeForm = (filterId: Id) => {
        updateSteps(prevFormsData => {
            return prevFormsData.filter(formData => formData.id !== filterId)
        })
    }
    const updateFormText = (id: string, event: React.ChangeEvent) => {
        const { value } = event.target as HTMLTextAreaElement

        updateSteps(prevFormsData => {
            return prevFormsData.map(form => {
                if (form.id === id) {
                    return { ...form, textContent: value }
                }
                return form
            })
        })
    }

    const stepForms = steps.map((formData, index) => {
        index = index + 1 // Start counting from one
        return (
            <AddRecipeInfo
                key={uuid()}
                index={index}
                isAccentSection={true}
                removeSelf={() => removeForm(formData.id)}
            >
                <StepForm
                    value={formData.textContent}
                    focus={activeForm === formData.id}
                    onChange={event => {
                        setActiveForm(formData.id)
                        updateFormText(formData.id, event)
                    }}
                />
            </AddRecipeInfo>
        )
    })

    const [ recipeData, updateRecipeData ] = useRecoilState(recipeInfo)

    useEffect(() => {
        updateRecipeData({ ...recipeData, steps })
    }, [steps])

    return (
        <div className={`${styles.subWidget} ${widgetStyles.layout}`}>
            <h3 className={widgetStyles.title}>Steps</h3>

            <div className={styles.forms}>
                {stepForms}
            </div>

            <AddRecipeInfoBtn info={'Step'} addForm={addForm} />
        </div>
    )
}

export default AddSteps