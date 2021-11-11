import React from 'react'

import styles from '../../styles/forms-and-inputs/AddRecipeInfo.module.scss'

interface Props {
    index: number
}

const AddRecipeInfo: React.FC<Props> = ({ index, children }) =>
{
    return (
        <div className={styles.layout}>
            <span className={styles.index}>{index}</span>

            <div className={styles.inputArea}>
                {children}
            </div>

        {/* Trash button */}
        </div>
    )
}

export default AddRecipeInfo