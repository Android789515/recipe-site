import React from 'react'
import { useRecoilState } from 'recoil'

import styles from '../../../styles/homepage/categories-section/CategoriesSection.module.scss'
import { isCategoryViewList } from '../../../atoms/categoryView'

import CategoriesSectionHeader from './CategoriesSectionHeader'
import CategoriesAsList from './CategoriesAsList'
import CategoriesAsGrid from './CategoriesAsGrid'

const CategoriesSection = () => {
    const [ isListView ] = useRecoilState(isCategoryViewList)

    return (
        <section className={styles.layout}>
            <CategoriesSectionHeader />

            <div className={styles.categories}>
                {isListView ? <CategoriesAsList /> : <CategoriesAsGrid />}
            </div>
        {/*
            container with the categories - need to pull from somewhere
         */}
        </section>
    )
}

export default CategoriesSection