import React from 'react'

import styles from '../../../styles/modals/add-recipe/AddIngredientBtn.module.scss'

interface Props {
    addIngredientForm: () => void
}

const AddIngredientBtn = ({ addIngredientForm }: Props) => {

    return (
        <p className={styles.addIngredientBtn} onClick={addIngredientForm}>+ Add Ingredient</p>
    )
}

export default AddIngredientBtn