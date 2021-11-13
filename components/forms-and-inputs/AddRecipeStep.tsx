import React from 'react'

import styles from '../../styles/AddRecipeStep.module.scss'

import ControlledTextArea from '../generic-components/ControlledTextArea'

interface Props {
    shouldResetTextArea: boolean
}

console.log(styles.resizable)

const AddRecipeStep = ({ shouldResetTextArea }: Props) => {
    return (
        <ControlledTextArea
            className={styles.textarea}
            name={'add-recipe-step'}
            placeholder={'Type step description here'}
            required={true}
            shouldResetTextArea={shouldResetTextArea}
        />
    )
}

export default AddRecipeStep