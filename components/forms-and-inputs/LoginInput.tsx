import React from 'react'

import styles from '../../styles/forms-and-inputs/LoginInput.module.scss'

interface Props {
    iconSrc: string,
    inputType: string,
    name: string,
    placeholder: string
}

const LoginInput = ({ iconSrc, inputType = 'text', name, placeholder }: Props) => {
    return (
        <div className={styles.inputSection}>
            <img className={styles.icon} src={iconSrc} alt='placeholder icon'/>

            <input
                className={styles.input}
                type={inputType}
                name={name}
                placeholder={placeholder}
                required
            />
        </div>
    )
}

export default LoginInput