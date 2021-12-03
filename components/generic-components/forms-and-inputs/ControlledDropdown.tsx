import React, { cloneElement, isValidElement, ReactElement } from 'react'

import styles from '../../../styles/generic-components/forms-and-inputs/ControlledDropdown.module.scss'

import useControlledDropdown from '../../../hooks/useControlledDropdown'

interface Props {
    placeholder?: string
    isRequired: boolean
    options: ReactElement<HTMLOptionElement>[] | undefined
    customStyles?: string
}

const ControlledDropdown = ({ placeholder, isRequired, options, customStyles }: Props) => {
    const { option, chooseOption } = useControlledDropdown(placeholder)

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
            value={option}
            required={isRequired}
            onChange={chooseOption}
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