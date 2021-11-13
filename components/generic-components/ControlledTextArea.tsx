import React, { useEffect } from 'react'

import useControlledInput from '../../hooks/useControlledInput'

interface Props {
    className: string,
    name: string,
    placeholder: string,
    required: boolean,
    shouldResetTextArea: boolean
}

const ControlledArea = (
    { className, name, shouldResetTextArea, placeholder, required }: Props) => {

    const { text, setText, clearText, submitOnEnter } = useControlledInput()

    const resetTextArea = () => {
        if (shouldResetTextArea) {
            clearText()
        }
    }

    useEffect(resetTextArea, [shouldResetTextArea])

    return (
        <textarea
            className={className}
            name={name}
            placeholder={placeholder}
            required={required}
            value={text}
            onChange={setText}
            onKeyDown={submitOnEnter}
        />
    )
}

ControlledArea.defaultProps = {
    shouldResetTextArea: false
}

export default ControlledArea