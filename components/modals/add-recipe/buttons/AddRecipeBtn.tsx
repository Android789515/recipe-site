import React from 'react'

import styles from '../../../../styles/modals/add-recipe/buttons/AddRecipeBtn.module.scss'

import Button from '../../../generic-components/Button'

const AddRecipeBtn = () => {
    return (
        <Button>
            <p className={styles.btn}>Add  Recipe</p>
        </Button>
    )
}

export default AddRecipeBtn