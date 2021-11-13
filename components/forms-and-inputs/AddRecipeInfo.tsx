import React, { useState } from 'react'

import styles from '../../styles/forms-and-inputs/AddRecipeInfo.module.scss'

interface Props {
    index: number
}

const AddRecipeInfo: React.FC<Props> = ({ index, children }) =>
{
    const [ shouldResetInputs, setShouldResetInputs ] = useState(false)

    const resetInputs = () => {
        setShouldResetInputs(true)
        setShouldResetInputs(false)
    }

    return (
        <div className={styles.layout}>
            <span className={styles.index}>{index}</span>

            <div className={styles.inputArea}>
                {React.isValidElement(children) &&
                React.cloneElement(children, { shouldClearInputs: shouldResetInputs })}
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

export default AddRecipeInfo