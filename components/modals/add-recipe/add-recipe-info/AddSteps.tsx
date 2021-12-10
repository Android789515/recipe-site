import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import widgetStyles from '../../../../styles/modals/add-recipe/AddRecipeWidget.module.scss'
import styles from '../../../../styles/modals/add-recipe/add-recipe-info/AddRecipeForms.module.scss'

import AddRecipeInfoBtn from './AddRecipeInfoBtn'
import StepForm from './StepForm'
import AddRecipeInfo from './AddRecipeInfo'

const AddSteps = () => {
    type Id = string

    interface FormData {
        id: Id
        value: string
    }

    const [ formsData, updateFormsData ] = useState<FormData[]>([])
    const [ activeForm, setActiveForm ] = useState<Id>()

    const addForm = () => {
        updateFormsData(prevFormsData => {
            return [...prevFormsData, { id: uuid(), value: '' }]
        })
    }
    const removeForm = (filterId: Id) => {
        updateFormsData(prevFormsData => {
            return prevFormsData.filter(formData => formData.id !== filterId)
        })
    }
    const updateFormText = (id: string, event: React.ChangeEvent) => {
        const { value } = event.target as HTMLTextAreaElement
        // console.log(id, value, event.target)
        updateFormsData(prevFormsData => {
            return prevFormsData.map(form => {
                if (form.id === id) {
                    return { ...form, value }
                }
                return form
            })
        })
    }

    const stepForms = formsData.map((formData, index) => {
        index = index + 1 // Start counting from one
        return (
            <AddRecipeInfo
                key={uuid()}
                index={index}
                isAccentSection={true}
                removeSelf={() => removeForm(formData.id)}
            >
                <StepForm
                    value={formData.value}
                    focus={activeForm === formData.id}
                    onChange={event => {
                        setActiveForm(formData.id)
                        updateFormText(formData.id, event)
                    }}
                />
            </AddRecipeInfo>
        )
    })

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