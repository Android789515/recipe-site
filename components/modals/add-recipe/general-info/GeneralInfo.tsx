import React from 'react'

import NameInput from './NameInput'
import FolderDropdown from './FolderDropdown'
import RateScale from './rate-scale/RateScale'
import DifficultyDropdown from './DifficultyDropdown'

const GeneralInfo = () => {

    return (
        <>
            <NameInput />
            <FolderDropdown />
            <RateScale />

            <DifficultyDropdown />
        </>
    )
}

export default GeneralInfo