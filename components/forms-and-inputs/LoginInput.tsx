import React from 'react'

import styles from '../../styles/forms-and-inputs/LoginInput.module.scss'

import ControlledInput from './ControlledInput'

interface Props {
    iconSrc: string,
    inputType: string,
    name: string,
    placeholder: string
}

const LoginInput = ({ iconSrc, inputType, name, placeholder }: Props) => {
    return (
        <div className={styles.inputSection}>
            <img className={styles.icon} src={iconSrc} alt='placeholder icon'/>

            <ControlledInput
                className={`${styles.input} unstyled-input`}
                type={inputType}
                name={name}
                placeholder={placeholder}
                required
            />
        </div>
    )
}

export default LoginInput