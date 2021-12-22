import React from 'react'

import styles from '../../../styles/modals/add-recipe/AddRecipe.module.scss'

import AddRecipeHeader from './AddRecipeHeader'
import AddRecipeWidgets from './AddRecipeWidgets'
import AddRecipeFooter from './AddRecipeFooter'

const AddRecipeModal = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                <AddRecipeHeader />

                <AddRecipeWidgets />

                <AddRecipeFooter />
            </div>
        </div>
    )
}

export default AddRecipeModal