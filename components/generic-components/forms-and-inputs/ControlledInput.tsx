import React, { useEffect, useRef } from 'react'

import styles from '../../../styles/generic-components/forms-and-inputs/ControlledInput.module.scss'
import inputTypes from '../../../types/inputTypes'

interface Props {
    customStyles?: string
    name: string
    showName?: boolean
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
    { customStyles, name, showName, type, inputMode, pattern, placeholder, required, focus, value, onChange }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (focus && inputRef.current) {
            inputRef.current.focus()
        }
    }, [focus])

    return (

        <label className={styles.label}>
            {showName &&  <p className={styles.labelText}>{name}</p>}

            <div>
                <input
                    className={`${styles.input} ${customStyles}`.trim()}
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
        </label>
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