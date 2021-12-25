import React from 'react'

import styles from '../../../styles/homepage/categories-section/CategoriesSectionHeader.module.scss'

import CategoryViewBtns from './CategoryViewBtns'

const CategoriesSectionHeader = () => {
    return (
        <header className={styles.layout}>
             {/* Section title */}
             <h3 className={styles.title}>Categories</h3>

            {/* Grid/list view buttons */}
            <CategoryViewBtns />

        </header>
    )
}

export default CategoriesSectionHeader