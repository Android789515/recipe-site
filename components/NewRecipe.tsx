import React from 'react'

import styles from '../styles/NewRecipe.module.scss'

const NewRecipe = () => {
    return (
        <div className={styles.newRecipeContainer}>
            <span className={styles.newRecipeAdd} />

            <p className={styles.newRecipeText}>New Recipe</p>
        </div>
    )
}

export default NewRecipe