import React from 'react'

import styles from '../../styles/Button.module.scss'

interface Props {
}

const Button: React.FC<Props> = ({ children }) => {
    return (
        <button type='button' className={`unstyled-button ${styles.btn}`}>{children}</button>
    )
}

export default Button