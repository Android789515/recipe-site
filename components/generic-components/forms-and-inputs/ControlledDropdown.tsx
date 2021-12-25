import React, { cloneElement, isValidElement, Children } from 'react'

import styles from '../../../styles/generic-components/forms-and-inputs/ControlledDropdown.module.scss'
import dropdownArrow from '../../../public/assets/icons/dropdown-arrow.svg'

import Image from '../Image'

interface Props {
    dropdownName?: string
    placeholder?: string
    isRequired: boolean
    customStyles?: string
    value: string
    onChange: React.ChangeEventHandler
}

const ControlledDropdown: React.FC<Props> =
    ({
         dropdownName,
         placeholder,
         isRequired,
         children: options,
         customStyles,
         value,
         onChange
    }) => {

    const renderOptions = () => {
        return options && Children.toArray(options).map(option => {
            if (isValidElement(option)) {
                return cloneElement(option, { className: styles.option })
            }
        })
    }

    return (
        <label className={`${styles.label} ${customStyles}`.trim()}>
            {dropdownName && <p className={styles.labelText}>{dropdownName}</p>}

            <select
                className={styles.dropdown}
                value={value || placeholder}
                required={isRequired}
                onChange={onChange}
            >
                {placeholder && (
                    <option className={styles.option} disabled>
                        {placeholder}
                    </option>
                )}

                {renderOptions()}
            </select>

            <Image
                className={styles.dropdownIcon}
                src={dropdownArrow}
                width={16}
            />
        </label>
    )
}

ControlledDropdown.defaultProps = {
    placeholder: '',
    customStyles: ''
}

export default ControlledDropdown