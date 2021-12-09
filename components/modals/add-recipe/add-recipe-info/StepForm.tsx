import React from 'react'

import styles from '../../../../styles/modals/add-recipe/add-recipe-info/AddRecipeStep.module.scss'
import inputStyles from '../../../../styles/modals/add-recipe/add-recipe-info/recipeInput.module.scss'

import ControlledTextArea from '../../../generic-components/forms-and-inputs/ControlledTextArea'

interface Props {
    value: string
    focus?: boolean
    onChange: React.ChangeEventHandler
}

const StepForm = ({ value, focus, onChange }: Props) => {
    return (
        <ControlledTextArea
            className={`${styles.textarea} ${inputStyles.recipeInput}`}
            name={'add-recipe-step'}
            placeholder={'Type step description here'}
            required={true}
            value={value}
            focus={focus}
            onChange={onChange}
        />
    )
}

export default StepForm