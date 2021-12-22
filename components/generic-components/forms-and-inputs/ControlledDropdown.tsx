import React, { cloneElement, isValidElement, ReactElement } from 'react'

import styles from '../../../styles/generic-components/forms-and-inputs/ControlledDropdown.module.scss'
import dropdownArrow from '../../../public/assets/icons/dropdown-arrow.svg'

import Image from '../Image'

interface Props {
    dropdownName?: string
    placeholder?: string
    isRequired: boolean
    options: ReactElement<HTMLOptionElement>[] | undefined
    customStyles?: string
    value: string
    onChange: React.ChangeEventHandler
}

const ControlledDropdown = ({ dropdownName, placeholder, isRequired, options, customStyles, value, onChange }: Props) => {

    const renderOptions = () => {
        return options!.map(option => {
            if (isValidElement(option)) {
                return cloneElement(option, { className: styles.option })
            }
        })
    }

    return (
        <label className={styles.label}>
            {dropdownName && <p className={styles.labelText}>{dropdownName}</p>}

            <select
                className={`${styles.dropdown}`.trim()}
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