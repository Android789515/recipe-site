import React, { cloneElement, isValidElement, Children, useRef } from 'react'

import inputStyles from '../../../styles/generic-components/forms-and-inputs/ControlledInput.module.scss'
import dropdownStyles from '../../../styles/generic-components/forms-and-inputs/ControlledDropdown.module.scss'
import styles from '../../../styles/generic-components/forms-and-inputs/ControlledInputDropdown.module.scss'
import dropdownArrow from '../../../public/assets/icons/dropdown-arrow.svg'

import Image from '../Image'
import inputTypes from '../../../types/inputTypes'

interface Props {
    dropdownName?: string
    placeholder?: string
    isRequired: boolean
    customStyles?: string
    value: string
    onChange: React.ChangeEventHandler
}

const ControlledInputDropdown: React.FC<Props> =
    ({
         dropdownName,
         placeholder,
         isRequired,
         customStyles,
         value,
         children: options,
         onChange
    }) => {

    const renderOptions = () => {
        return options && Children.toArray(options).map(option => {
            if (isValidElement(option)) {
                return cloneElement(option, { className: dropdownStyles.option })
            }
        })
    }

    const inputRef = useRef<HTMLInputElement>(null)

    const openDropdownMenu = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    return (
        <label className={`${dropdownStyles.label} ${customStyles}`.trim()}>
            {dropdownName && <p className={dropdownStyles.labelText}>{dropdownName}</p>}

            <input
                className={`${styles.inputDropdown} ${inputStyles.input} ${dropdownStyles.dropdown}`}
                value={value}
                type={inputTypes.text}
                required={isRequired}
                onChange={onChange}
                list={dropdownName}
                placeholder={placeholder}
                ref={inputRef}
            />

            {/* Connects to input */}
            <datalist id={dropdownName}>
                {renderOptions()}
            </datalist>

            <Image
                className={dropdownStyles.dropdownIcon}
                src={dropdownArrow}
                width={16}
                alt=''
                onClick={openDropdownMenu}
            />
        </label>
    )
}

ControlledInputDropdown.defaultProps = {
    placeholder: '',
    customStyles: ''
}

export default ControlledInputDropdown