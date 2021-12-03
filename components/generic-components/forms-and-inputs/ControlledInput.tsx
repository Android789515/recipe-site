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
    shouldResetInputs: boolean
}

const ControlledInput = (
    { className, name, type, shouldResetInputs, placeholder, required }: Props) => {

    const { text, setText, clearText, submitOnEnter } = useControlledInput()

    const resetInputs = () => {
        if (shouldResetInputs) {
            clearText()
        }
    }

    useEffect(resetInputs, [shouldResetInputs])

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