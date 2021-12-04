import React from 'react'

import generalInfoTitleStyle from '../../styles/modals/add-recipe/general-info/GeneralInfo.module.scss'
import styles from '../../styles/modals/add-recipe/AddRecipeWidgets.module.scss'

import GeneralInfo from './add-recipe/general-info/GeneralInfo'
import AddIngredients from './add-recipe/AddIngredients'
import AddRecipeWidget from './add-recipe/AddRecipeWidget'

const AddRecipeWidgets = ({  }) => {
    return (
        <div className={styles.layout}>
            <AddRecipeWidget title={'General info'} customTitleClass={generalInfoTitleStyle.title}>
                <GeneralInfo />
            </AddRecipeWidget>

            <AddRecipeWidget title={'Ingredients'}>
                <AddIngredients />
            </AddRecipeWidget>
        </div>
    )
}

export default AddRecipeWidgets