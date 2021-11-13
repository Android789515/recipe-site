import React from 'react'

import styles from '../../styles/forms-and-inputs/AddRecipeStep.module.scss'
import inputStyles from '../../styles/forms-and-inputs/recipeInput.module.scss'

import ControlledTextArea from '../generic-components/ControlledTextArea'

interface Props {
    shouldResetInputs: boolean
}

const AddRecipeStep = ({ shouldResetInputs }: Props) => {
    // TODO - Figure out what submits this since it's a text area and enter
    // should make a new line without clearing the text
    return (
        <ControlledTextArea
            className={`${styles.textarea} ${inputStyles.recipeInput} unstyledInput`}
            name={'add-recipe-step'}
            placeholder={'Type step description here'}
            required={true}
            shouldResetTextArea={shouldResetInputs}
        />
    )
}

export default AddRecipeStep