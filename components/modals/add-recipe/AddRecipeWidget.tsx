import React from 'react'

import styles from '../../../styles/modals/add-recipe/AddRecipeWidget.module.scss'

import Widget from '../../generic-components/Widget'

interface Props {
    title: string
    customTitleClass?: string
}

const AddRecipeWidget: React.FC<Props> =
    ({ title, customTitleClass, children }) => {
    return (
        <Widget>
            <div className={styles.paddedLayout}>
                <h3 className={`${styles.title} ${customTitleClass}`}>{title}</h3>

                {children}
            </div>
        </Widget>
    )
}

export default AddRecipeWidget