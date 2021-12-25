import React from 'react'

import styles from '../../../../styles/modals/add-recipe/buttons/CancelBtn.module.scss'

import Button from '../../../generic-components/Button'

const CancelBtn = () => {
    return (
        <Button customStyles={styles.btn}>
            <p className={styles.text}>Cancel</p>
        </Button>
    )
}

export default CancelBtn