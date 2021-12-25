import React from 'react'

import styles from '../../styles/generic-components/Button.module.scss'

interface Props {
    customStyles?: string
}

const Button: React.FC<Props> =
    ({ customStyles, children }) => {
    return (
        <button type='button' className={`${styles.btn} ${customStyles}`}>{children}</button>
    )
}

export default Button