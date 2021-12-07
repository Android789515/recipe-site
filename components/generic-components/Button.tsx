import React from 'react'

import styles from '../../styles/generic-components/Button.module.scss'

interface Props {
    // Must be a hexcode
    customClass?: string
}

const Button: React.FC<Props> =
    ({ customClass, children }) => {
    return (
        <button type='button' className={`${styles.btn} ${customClass}`}>{children}</button>
    )
}

export default Button