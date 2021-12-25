import React from 'react'
import { useRecoilState } from 'recoil'

import styles from '../../../styles/homepage/categories-section/Categories.module.scss'
import { categoryViewState } from '../../../atoms/categoryView'

const Categories = () => {
    const [ categoryView ] = useRecoilState(categoryViewState)

    return (
        <div className={styles.categories}>
            <p>{categoryView}</p>
        </div>
    )
}

export default Categories