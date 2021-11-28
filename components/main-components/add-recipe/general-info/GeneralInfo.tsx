import React from 'react'

import styles from '../../../../styles/main-components/add-recipe/general-info/GeneralInfo.module.scss'
import { yes } from '../../../../utils/responses'

import ControlledInput from '../../../generic-components/ControlledInput'

const generalInfo = ({  }) => {
    const placeholders = {
        nameInput: 'Type dish name here',
        folderDropdown: 'Choose or create folder',
        difficultyDropdown: 'Difficulty',
        timeDropdown: 'Time'
    }

    return (
        <div className={styles.layout}>
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
            <label>
                Name
                <ControlledInput
                    className={}
                    placeholder={placeholders.nameInput}
                    required={yes}
                    name={'Name'}
                />
            </label>
        </div>
    )
}

export default generalInfo