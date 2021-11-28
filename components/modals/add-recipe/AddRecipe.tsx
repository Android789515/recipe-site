import React from 'react'

import styles from '../../../styles/modals/add-recipe/AddRecipe.module.scss'

import AddRecipeHeader from './AddRecipeHeader/AddRecipeHeader'
import Widget from '../../generic-components/Widget'
import GeneralInfo from './general-info/GeneralInfo'

interface Props {

}

const AddRecipe = ({  }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                <AddRecipeHeader />
                <Widget><GeneralInfo /></Widget>
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