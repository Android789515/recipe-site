import React, { useState } from 'react'

import styles from '../../styles/forms-and-inputs/AddRecipeInfo.module.scss'

interface Props {
    index: number,
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

            <img
                className={styles.deleteIcon}
                src=''
                alt='Delete'
                onClick={resetInputs}
            />
        </div>
    )
}

AddRecipeInfo.defaultProps = {
    isAccentSection: false
}

export default AddRecipeInfo