import React, { useEffect, useRef } from 'react'

import styles from '../../../styles/generic-components/forms-and-inputs/ControlledInput.module.scss'
import inputTypes from '../../../types/inputTypes'

interface Props {
    className?: string
    name: string
    type: string
    inputMode?: inputModes
    pattern?: string
    placeholder: string
    required: boolean
    value: string
    hasIcon: { src: string }
    focus?: boolean
    onChange: React.ChangeEventHandler
}

type inputModes = 'search' | 'text' | 'email' | 'tel' | 'url' | 'none' | 'numeric' | 'decimal' | undefined

const ControlledInput = (
    { className, name, type, inputMode, pattern, placeholder, required, focus, value, onChange }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (focus && inputRef.current) {
            inputRef.current.focus()
        }
    }, [focus])

    return (
        <div>
            <input
                className={`${className} ${styles.input}`.trim()}
                name={name}
                type={type}
                inputMode={inputMode}
                pattern={pattern}
                placeholder={placeholder}
                required={required}
                value={value}
                ref={inputRef}
                onChange={onChange}
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