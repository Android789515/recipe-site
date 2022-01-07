import React from 'react'

import styles from '../../styles/generic-components/Button.module.scss'

interface Props {
    customStyles?: string
    onClick: () => void
}

const Button: React.FC<Props> =
    ({ customStyles, onClick, children }) => {
    return (
        <button type='button' className={`${styles.btn} ${customStyles}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button