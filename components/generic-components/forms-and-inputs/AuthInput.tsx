import React from 'react'

import styles from '../../../styles/generic-components/forms-and-inputs/AuthInput.module.scss'
import passwordEyeIcon from '../../../public/assets/icons/password-eye.svg'

import ControlledInput from './ControlledInput'
import Image from '../Image'

interface Props {
    iconSrc: string
    inputType: string
    name: string
    placeholder: string
    isDataSensitive?: boolean
}

const AuthInput = ({ iconSrc, inputType, name, placeholder, isDataSensitive }: Props) => {
    return (
        <div className={styles.inputSection}>
            <Image className={styles.icon} src={iconSrc} width='30px' height='28px' alt='placeholder icon'/>

            <ControlledInput
                labelStyles={styles.noBorder}
                customStyles={styles.input}
                type={inputType}
                name={name}
                placeholder={placeholder}
                required
                value={''}
                onChange={() => {}}
            />

            {isDataSensitive && <Image src={passwordEyeIcon} />}
        </div>
    )
}

export default AuthInput