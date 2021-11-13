import React from 'react'

import styles from '../../styles/forms-and-inputs/LoginInput.module.scss'
import useControlledInput from '../../hooks/useControlledInput'

interface Props {
    iconSrc: string,
    inputType: string,
    name: string,
    placeholder: string
}

const LoginInput = ({ iconSrc, inputType = 'text', name, placeholder }: Props) => {
    const { text, setText, submitOnEnter } = useControlledInput()

    return (
        <div className={styles.inputSection}>
            <img className={styles.icon} src={iconSrc} alt='placeholder icon'/>

            <input
                className={`${styles.input} unstyled-input`}
                type={inputType}
                name={name}
                placeholder={placeholder}
                required
                onChange={setText}
                value={text}
                onKeyDown={submitOnEnter}
            />
        </div>
    )
}

export default LoginInput