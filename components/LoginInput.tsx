import React from 'react'

import styles from '../styles/LoginInput.module.scss'

import ControlledInput from './generic-components/forms-and-inputs/ControlledInput'
import Image from './generic-components/Image'

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
                value={''}
                onChange={() => {}}
            />
        </div>
    )
}

export default LoginInput