import React, { useEffect } from 'react'

import inputTypes from '../../types/inputTypes'

import useControlledInput from '../../hooks/useControlledInput'

interface Props {
    className: string,
    name: string,
    type: string,
    placeholder: string,
    required: boolean,
    shouldResetInputs: boolean
}

const ControlledInput = (
    { className, name, type = inputTypes._text, shouldResetInputs, placeholder, required }: Props) => {

    const { text, setText, clearText, submitOnEnter } = useControlledInput()

    const resetInputs = () => {
        if (shouldResetInputs) {
            clearText()
        }
    }

    useEffect(resetInputs, [shouldResetInputs])

    return (
        <input
            className={className}
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            value={text}
            onChange={setText}
            onKeyDown={submitOnEnter}
        />
    )
}

ControlledInput.defaultProps = {
    shouldResetInputs: false
}

export default ControlledInput