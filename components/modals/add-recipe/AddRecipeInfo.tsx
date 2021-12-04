import React from 'react'

import styles from '../../../styles/modals/add-recipe/AddRecipeInfo.module.scss'
import trashIcon from '../../../public/assets/icons/trash.svg'

import Image  from '../../generic-components/Image'

interface Props {
    index: number
    isAccentSection?: boolean
}

const AddRecipeInfo: React.FC<Props> = ({ index, isAccentSection, children }) =>
{
    return (
        <div className={styles.layout}>
            <span className={`${styles.index} ${isAccentSection && styles.indexAccent}`}>{index}</span>

            <div className={styles.inputArea}>
                {children}
            </div>

            <div className={styles.deleteIcon}>
                <Image
                    src={trashIcon}
                    alt='Delete'
                />
            </div>
        </div>
    )
}

AddRecipeInfo.defaultProps = {
    isAccentSection: false
}

export default AddRecipeInfo