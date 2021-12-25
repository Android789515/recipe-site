import React from 'react'
import NextImage from 'next/image'

import styles from '../../../styles/homepage/categories-section/CategoryViewBtns.module.scss'
import gridViewIcon from '../../../public/assets/icons/gridView.svg'
import listViewIcon from '../../../public/assets/icons/listView.svg'

const CategoryViewBtns = () => {
    return (
        <div className={styles.categoryViewBtns}>
            <NextImage src={gridViewIcon} />
            <NextImage src={listViewIcon} />
        </div>
    )
}

export default CategoryViewBtns