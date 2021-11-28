import React from 'react'

import styles from '../../../../styles/main-components/add-recipe/general-info/NameInput.module.scss'
import { yes } from '../../../../utils/responses'

import ControlledInput from '../../../generic-components/ControlledInput'

const NameInput = ({  }) => {
    const placeholder = 'Type dish name here'
    return (
        <label className={styles.label}>
            Name
            <ControlledInput
                className={styles.input}
                placeholder={placeholder}
                required={yes}
                name={'Name'}
            />
        </label>
    )
}

export default NameInput