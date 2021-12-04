import React from 'react'

import styles from '../../../../styles/modals/add-recipe/general-info/GeneralInfo.module.scss'

import NameInput from './NameInput'
import FolderDropdown from './FolderDropdown'
import RateScale from './rate-scale/RateScale'

const GeneralInfo = ({  }) => {
    const placeholders = {
        difficultyDropdown: 'Difficulty',
        timeDropdown: 'Time'
    }

    return (
        <>
        {/*
            Title

            Input with label - Name (Label name)
            Placeholder: Type dish name here

            Dropdown select with label - Folder (Label name)
            Placeholder: Choose or create folder

            5 star buttons "Rate" --- x/5 stars

            Dropdown select with icon - Difficulty (Placeholder)
            Dropdown select with icon - Time (Placeholder)
         */}
            <NameInput />
            <FolderDropdown />
            <RateScale />
        </>
    )
}

export default GeneralInfo