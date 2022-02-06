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
    value: string
    onChange: React.ChangeEventHandler
    isPasswordShown?: boolean
    showOrHidePassword?: () => void
}

const AuthInput = ({
    iconSrc,
    inputType,
    name,
    placeholder,
    isDataSensitive,
    value,
    onChange,
    isPasswordShown,
    showOrHidePassword
}: Props) => {
    return (
        <div className={styles.inputSection}>
            <Image className={styles.icon} src={iconSrc} alt='placeholder icon'/>

            <ControlledInput
                labelStyles={styles.noBorder}
                customStyles={styles.input}
                type={inputType}
                name={name}
                placeholder={placeholder}
                required
                value={value}
                onChange={onChange}
            />

            {
                isDataSensitive &&
                <Image
                    className={isPasswordShown ? styles.passwordEyeIconGreyedOut : styles.passwordEyeIcon}
                    src={passwordEyeIcon}
                    onClick={showOrHidePassword}
                    alt='Show password'
                />
            }
        </div>
    )
}

export default AuthInput