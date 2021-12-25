import React from 'react'

import styles from '../../../styles/homepage/categories-section/CategoriesSection.module.scss'

import CategoriesSectionHeader from './CategoriesSectionHeader'
import Categories from './Categories'

const CategoriesSection = () => {
    return (
        <section className={styles.layout}>
            <CategoriesSectionHeader />

            <Categories />
        {/*
            container with the categories - need to pull from somewhere
         */}
        </section>
    )
}

export default CategoriesSection