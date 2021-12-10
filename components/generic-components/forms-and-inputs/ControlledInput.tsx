import React from 'react'

import styles from '../../../styles/generic-components/forms-and-inputs/ControlledInput.module.scss'
import inputTypes from '../../../types/inputTypes'

interface Props {
    className?: string,
    name: string,
    type: string,
    placeholder: string,
    required: boolean,
    value: string
    hasIcon: { src: string }
    onChange: React.ChangeEventHandler
}

const ControlledInput = (
    { className, name, type, placeholder, required, value, onChange }: Props) => {

    return (
        <div>
            <input
                className={`${className} ${styles.input}`.trim()}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                value={value}
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