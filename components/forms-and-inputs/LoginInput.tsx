import React from 'react'

import styles from '../../styles/forms-and-inputs/LoginInput.module.scss'

import ControlledInput from '../generic-components/ControlledInput'
import Image from '../generic-components/Image'

interface Props {
    iconSrc: string
    inputType: string
    name: string
    placeholder: string
}

const LoginInput = ({ iconSrc, inputType, name, placeholder }: Props) => {
    return (
        <div className={styles.inputSection}>
            <Image className={styles.icon} src={iconSrc} width='30px' height='28px' alt='placeholder icon'/>

            <ControlledInput
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