import React, { useEffect, useRef } from 'react'

import styles from '../../../styles/homepage/categories-section/Category.module.scss'
import Button from '../../generic-components/Button'

interface Props {
    img: string
    title: string
    body: string
    recipeCount: number
}

const Category = ({ img, title, body, recipeCount }: Props) => {

    const categoryRef = useRef(null)

    const setBackgroundImg = () => {
        if (categoryRef.current) {
            (categoryRef.current as HTMLDivElement).style.backgroundImage = `url(${img})`
        }
    }

    useEffect(setBackgroundImg, [])

    return (
        <div className={`${styles.categoryLayout} ${styles.category}`} ref={categoryRef}>
            <h3 className={styles.categoryTitle}>{title}</h3>

            <p className={styles.categoryBody}>{body}</p>

            <Button customStyles={styles.recipesBtn}>
                <p className={styles.recipeCount}>{recipeCount} recipes</p>
            </Button>
        </div>
    )
}

export default Category