import React from 'react'

import styles from '../../../../styles/modals/add-recipe/add-recipe-info/AddRecipeInfoBtn.module.scss'

interface Props {
    info: string
    addForm: () => void
}

const AddRecipeInfoBtn = ({ info, addForm }: Props) => {

    return (
        <p className={styles.text} onClick={addForm}>+ Add {info}</p>
    )
}

export default AddRecipeInfoBtn