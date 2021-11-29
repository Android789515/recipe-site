import React from 'react'
import Image from '../../../generic-components/Image'

import styles from '../../../../styles/modals/add-recipe/general-info/FolderDropdown.module.scss'
import dropdownArrow from '../../../../public/assets/icons/dropdown-arrow.svg'

import useControlledDropdown from '../../../../hooks/useControlledDropdown'

const FolderDropdown = ({  }) => {
    const { option, chooseOption } = useControlledDropdown('Choose or create folder')

    // Need to get list of folders
    return (
        <label className={styles.label}>
            Folder
            <select className={styles.dropdown} value={option} required onChange={chooseOption}>
                <option className={styles.option} disabled>Choose or create folder</option>

            </select>

            <Image src={dropdownArrow} />
        </label>
    )
}

export default FolderDropdown