import React from 'react'

import styles from '../../../styles/modals/add-recipe/AddRecipeFooter.module.scss'

import AddRecipeBtn from './buttons/AddRecipeBtn'
import CancelBtn from './buttons/CancelBtn'

const AddRecipeFooter = () => {
    return (
        <footer className={styles.layout}>
            <CancelBtn />

            <AddRecipeBtn />
        </footer>
    )
}

export default AddRecipeFooter