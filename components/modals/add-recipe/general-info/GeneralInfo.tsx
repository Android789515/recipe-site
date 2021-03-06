import React from 'react'

import NameInput from './NameInput'
import FolderDropdown from './FolderDropdown'
import RateScale from './rate-scale/RateScale'
import DifficultyDropdown from './DifficultyDropdown'
import TimeInput from './TimeInput'
import TotalCalories from './TotalCalories'

const GeneralInfo = () => {

    return (
        <>
            <NameInput />
            <FolderDropdown />
            <RateScale />

            <DifficultyDropdown />
            <TimeInput />
            <TotalCalories />
        </>
    )
}

export default GeneralInfo