import React from 'react'
import Image from '../../../generic-components/Image'

import styles from '../../../../styles/modals/add-recipe/general-info/FolderDropdown.module.scss'
import dropdownArrow from '../../../../public/assets/icons/dropdown-arrow.svg'

import ControlledDropdown from '../../../generic-components/forms-and-inputs/ControlledDropdown'

const FolderDropdown = ({  }) => {

    // Need to get list of folders
    return (
        <label className={styles.label}>
            <p className={styles.labelText}>Folder</p>

            <ControlledDropdown
                customStyles={styles.folderDropdown}
                placeholder={'Choose or create folder'}
                isRequired={true}
                options={undefined}
            />

            <Image
                className={styles.dropdownIcon}
                src={dropdownArrow}
                width={16}
            />
        </label>
    )
}

export default FolderDropdown