import React, { useEffect } from 'react'

import styles from '../../../styles/generic-components/forms-and-inputs/ControlledInput.module.scss'
import inputTypes from '../../../types/inputTypes'

import useControlledInput from '../../../hooks/useControlledInput'

interface Props {
    className?: string,
    name: string,
    type: string,
    placeholder: string,
    required: boolean,
    hasIcon: { src: string }
}

const ControlledInput = (
    { className, name, type, placeholder, required }: Props) => {

    const { text, setText, submitOnEnter } = useControlledInput()

    return (
        <div>
            <input
                className={`${className} ${styles.input}`.trim()}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                value={text}
                onChange={setText}
                onKeyDown={submitOnEnter}
            />


        </div>
    )
}

ControlledInput.defaultProps = {
    className: '',
    type: inputTypes.text,
    required: false,
    shouldResetInputs: false,
    hasIcon: undefined
}

export default ControlledInput