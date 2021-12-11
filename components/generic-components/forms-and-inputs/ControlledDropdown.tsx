import React, { cloneElement, isValidElement, ReactElement } from 'react'

import styles from '../../../styles/generic-components/forms-and-inputs/ControlledDropdown.module.scss'

interface Props {
    placeholder?: string
    isRequired: boolean
    options: ReactElement<HTMLOptionElement>[] | undefined
    customStyles?: string
    value: string
    onChange: React.ChangeEventHandler
}

const ControlledDropdown = ({ placeholder, isRequired, options, customStyles, value, onChange }: Props) => {

    const renderOptions = () => {
        return options!.map(option => {
            if (isValidElement(option)) {
                return cloneElement(option, { className: styles.option })
            }
        })
    }

    return (
        <select
            className={`${styles.dropdown} ${customStyles}`.trim()}
            value={value || placeholder}
            required={isRequired}
            onChange={onChange}
        >
            {placeholder && (
                <option className={styles.option} disabled>
                    {placeholder}
                </option>
            )}

            {options && renderOptions()}
        </select>
    )
}

ControlledDropdown.defaultProps = {
    placeholder: '',
    customStyles: ''
}

export default ControlledDropdown