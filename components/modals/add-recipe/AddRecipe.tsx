import React from 'react'

import styles from '../../../styles/modals/add-recipe/AddRecipe.module.scss'

import AddRecipeHeader from './AddRecipeHeader'
import AddRecipeWidgets from './AddRecipeWidgets'

interface Props {

}

const AddRecipe = ({  }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                <AddRecipeHeader />

                <AddRecipeWidgets />

            {/* AddRecipeFooter -> Cancel ------ Add recipes */}
            </div>
        </div>
    )
}

export default AddRecipe