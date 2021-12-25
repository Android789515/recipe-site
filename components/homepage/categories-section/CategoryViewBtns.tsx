import React from 'react'
import { useRecoilState } from 'recoil'
import NextImage from 'next/image'

import styles from '../../../styles/homepage/categories-section/CategoryViewBtns.module.scss'
import gridViewIcon from '../../../public/assets/icons/gridView.svg'
import listViewIcon from '../../../public/assets/icons/listView.svg'
import { isCategoryViewList } from '../../../atoms/categoryView'

const CategoryViewBtns = () => {
    const [ irrelevant, updateCategoryView ] = useRecoilState(isCategoryViewList)

    const setCategoryListView = () => {
        updateCategoryView(true)
    }

    const setCategoryGridView = () => {
        updateCategoryView(false)
    }

    return (
        <div className={styles.categoryViewBtns}>
            <NextImage src={gridViewIcon} onClick={setCategoryGridView} />
            <NextImage src={listViewIcon} onClick={setCategoryListView} />
        </div>
    )
}

export default CategoryViewBtns