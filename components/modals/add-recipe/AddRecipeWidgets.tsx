import React from 'react'

import generalInfoTitleStyle from '../../../styles/modals/add-recipe/general-info/GeneralInfo.module.scss'
import imageGalleryTitleStyle from '../../../styles/modals/add-recipe/image-gallery/ImageGallery.module.scss'
import styles from '../../../styles/modals/add-recipe/AddRecipeWidgets.module.scss'

import GeneralInfo from './general-info/GeneralInfo'
import AddIngredients from './add-recipe-info/AddIngredients'
import AddRecipeWidget from './AddRecipeWidget'
import ImageGallery from './image-gallery/ImageGallery'

const AddRecipeWidgets = ({  }) => {
    return (
        <div className={styles.layout}>
            <AddRecipeWidget title={'General info'} customTitleClass={generalInfoTitleStyle.title}>
                <GeneralInfo />
            </AddRecipeWidget>

            <AddRecipeWidget title={'Ingredients'}>
                <AddIngredients />
            </AddRecipeWidget>

            <AddRecipeWidget title={'Image Gallery'} customTitleClass={imageGalleryTitleStyle.title}>
                <ImageGallery />
            </AddRecipeWidget>
        </div>
    )
}

export default AddRecipeWidgets