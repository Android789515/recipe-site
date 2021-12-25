import React from 'react'
import { useRecoilState } from 'recoil'

import styles from '../../../styles/homepage/categories-section/CategoriesSection.module.scss'
import { isCategoryViewList } from '../../../atoms/categoryView'
import testImg from '../../../public/assets/img/mexican.png'

import CategoriesSectionHeader from './CategoriesSectionHeader'
import CategoriesAsList from './CategoriesAsList'
import CategoriesAsGrid from './CategoriesAsGrid'

const CategoriesSection = () => {
    const [ isListView ] = useRecoilState(isCategoryViewList)

    interface Category {
        img: string
        title: string
        body: string
        recipeCount: number
    }

    const categories: Category[] = [
        {
            img: './assets/img/mexican.png',
            title: 'Mexican',
            body: `Mexican cuisine is a complex and ancient cuisine, 
            with techniques and skills developed over thousands of years of history`,
            recipeCount: 23
        }
    ]

    return (
        <section className={styles.layout}>
            <CategoriesSectionHeader />

            <div className={styles.categories}>
                {isListView ? (
                    <CategoriesAsList categories={categories} />
                ) : (
                    <CategoriesAsGrid categories={categories} />
                )}
            </div>
        {/*
            container with the categories - need to pull from somewhere
         */}
        </section>
    )
}

export default CategoriesSection