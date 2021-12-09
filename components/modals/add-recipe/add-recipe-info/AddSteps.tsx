import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import AddRecipeInfoBtn from './AddRecipeInfoBtn'
import StepForm from './StepForm'

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

    const stepForms = formsData.map(formData => {
        console.log('updated')
        return (
            <StepForm
                key={uuid()}
                value={formData.value}
                focus={activeForm === formData.id}
                onChange={event => {
                    setActiveForm(formData.id)
                    updateFormText(formData.id, event)
                }}
            />
        )
    })

    return (
        <>
            <div>
                {stepForms}
            </div>

            <AddRecipeInfoBtn info={'Step'} addForm={addForm} />
        </>
    )
}

export default AddSteps