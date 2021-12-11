import React from 'react'

import NameInput from './NameInput'
import FolderDropdown from './FolderDropdown'
import RateScale from './rate-scale/RateScale'

const GeneralInfo = () => {

    return (
        <>
            <NameInput />
            <FolderDropdown />
            <RateScale />
        </>
    )
}

export default GeneralInfo