import React from 'react'

import styles from '../../styles/generic-components/Button.module.scss'

interface Props {
}

const Button: React.FC<Props> = ({ children }) => {
    return (
        <button type='button' className={`unstyledButton ${styles.btn}`}>{children}</button>
    )
}

export default Button