import React from 'react'

import styles from '../../../styles/modals/add-recipe/AddRecipeHeader.module.scss'
import closeBtn from '../../../public/assets/icons/close-btn.svg'

import Image from '../../generic-components/Image'

const AddRecipeHeader = () => {
    const closeBtnDimensions = 32
    return (
        <header className={styles.layout}>
            <h2 className={styles.title}>New Recipe</h2>

            <Image
                className={styles.closeBtn}
                src={closeBtn}
                width={closeBtnDimensions}
                height={closeBtnDimensions}
            />
        </header>
    )
}

export default AddRecipeHeader