import React, { cloneElement, isValidElement, ReactElement } from 'react'
import { v4 as uuid } from 'uuid'

import inputStyles from '../../../styles/generic-components/forms-and-inputs/ControlledInput.module.scss'
import dropdownStyles from '../../../styles/generic-components/forms-and-inputs/ControlledDropdown.module.scss'
import dropdownArrow from '../../../public/assets/icons/dropdown-arrow.svg'

import Image from '../Image'
import inputTypes from '../../../types/inputTypes'

interface Props {
    dropdownName?: string
    placeholder?: string
    isRequired: boolean
    options: ReactElement<HTMLOptionElement>[] | undefined
    customStyles?: string
    value: string
    onChange: React.ChangeEventHandler
}

const ControlledInputDropdown = ({ dropdownName, placeholder, isRequired, options, customStyles, value, onChange }: Props) => {

    const renderOptions = () => {
        return options!.map(option => {
            if (isValidElement(option)) {
                return cloneElement(option, { className: dropdownStyles.option })
            }
        })
    }

    const dropdownID = uuid()

    return (
        <label className={`${dropdownStyles.label} ${customStyles}`.trim()}>
            {dropdownName && <p className={dropdownStyles.labelText}>{dropdownName}</p>}

            <input
                className={`${inputStyles.input} ${dropdownStyles.dropdown}`}
                value={value}
                type={inputTypes.text}
                required={isRequired}
                onChange={onChange}
                list={dropdownName}
                placeholder={placeholder}
            />

            <datalist id={dropdownName}>
                {options && renderOptions()}
            </datalist>

            <Image
                className={dropdownStyles.dropdownIcon}
                src={dropdownArrow}
                width={16}
            />
        </label>
    )
}

ControlledInputDropdown.defaultProps = {
    placeholder: '',
    customStyles: ''
}

export default ControlledInputDropdown