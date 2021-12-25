import React from 'react'
import { useRecoilState } from 'recoil'

import { generalInfoData } from '../../../../atoms/recipeInfo'

import ControlledDropdown from '../../../generic-components/forms-and-inputs/ControlledDropdown'
import ControlledInputDropdown from '../../../generic-components/forms-and-inputs/ControlledInputDropdown'

const FolderDropdown = () => {
    const [ { folder }, updateGeneralInfo ] = useRecoilState(generalInfoData)

    const setFolder = (folder: string) => {
        updateGeneralInfo(prevInfo => ({ ...prevInfo, folder }))
    }

    const chooseFolder = (event: React.ChangeEvent) => {
        const { value: folderSelected } = event.target as HTMLOptionElement
        setFolder(folderSelected)
    }

    // Need to get list of folders
    return (
        <ControlledInputDropdown
            dropdownName={'Folder'}
            placeholder={'Choose or create folder'}
            isRequired={true}
            options={undefined}
            value={folder}
            onChange={chooseFolder}
        />
    )
}

export default FolderDropdown