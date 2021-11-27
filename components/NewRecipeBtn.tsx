import React from 'react'

import styles from '../styles/NewRecipeBtn.module.scss'

const NewRecipeBtn = () => {
    return (
        <div className={styles.newRecipeContainer}>
            <span className={styles.newRecipeAdd} />

            <p className={styles.newRecipeText}>New Recipe</p>
        </div>
    )
}

export default NewRecipeBtn