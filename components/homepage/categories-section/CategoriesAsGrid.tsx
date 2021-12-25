import React from 'react'
import { v4 as uuid } from 'uuid'

import styles from '../../../styles/homepage/categories-section/CategoriesAsGrid.module.scss'
import Category from './Category'

interface Props {
    categories: Category[]
}

interface Category {
    img: string
    title: string
    body: string
    recipeCount: number
}

const CategoriesAsGrid = ({ categories }: Props) => {


    return (
        <>
            {categories.map(category => {
                return (
                    <Category
                        key={uuid()}
                        img={category.img}
                        title={category.title}
                        body={category.body}
                        recipeCount={category.recipeCount}
                    />
                )
            })}
        </>
    )
}

export default CategoriesAsGrid