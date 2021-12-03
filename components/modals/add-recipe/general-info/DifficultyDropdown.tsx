import React from 'react'

import styles from '../../../../styles/modals/add-recipe/general-info/DifficultyDropdown.module.scss'

import ControlledDropdown from '../../../generic-components/forms-and-inputs/ControlledDropdown'
import Image from '../../../generic-components/Image'

const DifficultyDropdown = ({  }) => {
    return (
        <label>

            <ControlledDropdown
                placeholder={'Difficulty'}
                isRequired={true}
                options={undefined}
            />
        </label>
    )
}

export default DifficultyDropdown