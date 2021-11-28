import React, { useState } from 'react'
import Image from '../../../generic-components/Image'

import dropdownArrow from '../../../../public/assets/icons/dropdown-arrow.svg'
import useControlledDropdown from '../../../../hooks/useControlledDropdown'

const FolderDropdown = ({  }) => {
    const { option, chooseOption } = useControlledDropdown()

    // Need to get list of folders
    return (
        <label>
            Folder
            <select value={option} required onChange={chooseOption}>
                <option disabled selected>Choose or create folder</option>

            </select>

            <Image src={dropdownArrow} />
        </label>
    )
}

export default FolderDropdown