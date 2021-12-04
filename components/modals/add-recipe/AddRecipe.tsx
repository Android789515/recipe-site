import React from 'react'

import styles from '../../../styles/modals/add-recipe/AddRecipe.module.scss'

import AddRecipeHeader from './AddRecipeHeader/AddRecipeHeader'
import AddRecipeWidgets from '../AddRecipeWidgets'

interface Props {

}

const AddRecipe = ({  }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                <AddRecipeHeader />

                <AddRecipeWidgets />
            {/*
                Title ---- close(x) button

                Panel | General info
                Panel | Ingredients / Steps
                Panel | Upload gallery

                Cancel ------ Add recipes
             */}
            </div>
        </div>
    )
}

export default AddRecipe