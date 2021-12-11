import React from 'react'
import { useRecoilState } from 'recoil'
import Image from '../../../generic-components/Image'

import styles from '../../../../styles/modals/add-recipe/general-info/FolderDropdown.module.scss'
import dropdownArrow from '../../../../public/assets/icons/dropdown-arrow.svg'
import recipeInfo from '../../../../atoms/recipeInfo'

import ControlledDropdown from '../../../generic-components/forms-and-inputs/ControlledDropdown'

const FolderDropdown = () => {
    const [ recipeData, updateRecipeData ] = useRecoilState(recipeInfo)
    const { folder } = recipeData.generalInfo

    const setFolder = (folder: string) => {
        updateRecipeData({ ...recipeData, generalInfo: { ...recipeData.generalInfo, folder } })
    }

    const chooseFolder = (event: React.ChangeEvent) => {
        const { value: folderSelected } = event.target as HTMLOptionElement
        setFolder(folderSelected)
    }

    // Need to get list of folders
    return (
        <label className={styles.label}>
            <p className={styles.labelText}>Folder</p>

            <ControlledDropdown
                customStyles={styles.folderDropdown}
                placeholder={'Choose or create folder'}
                isRequired={true}
                options={undefined}
                value={folder}
                onChange={chooseFolder}
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