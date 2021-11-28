import React, { useState } from 'react'

import styles from '../../../styles/modals/add-recipe/AddRecipeInfo.module.scss'
import trashIcon from '../../../public/assets/icons/trash.svg'

import Image  from '../../generic-components/Image'

interface Props {
    index: number
    isAccentSection: boolean
}

const AddRecipeInfo: React.FC<Props> = ({ index, isAccentSection, children }) =>
{
    const [ shouldResetInputs, setShouldResetInputs ] = useState(false)

    const resetInputs = async () => {
        await setShouldResetInputs(true)
        setShouldResetInputs(false)
    }

    return (
        <div className={styles.layout}>
            <span className={`${styles.index} ${isAccentSection && styles.indexAccent}`}>{index}</span>

            <div className={styles.inputArea}>
                {React.isValidElement(children) &&
                React.cloneElement(children, { shouldResetInputs: shouldResetInputs })}
            </div>

            <div className={styles.deleteIcon}>
                <Image
                    src={trashIcon}
                    alt='Delete'
                    onClick={resetInputs}
                />
            </div>
        </div>
    )
}

AddRecipeInfo.defaultProps = {
    isAccentSection: false
}

export default AddRecipeInfo