import React, { useState } from 'react'

import styles from '../../../../styles/modals/add-recipe/general-info/DifficultyDropdown.module.scss'

import ControlledDropdown from '../../../generic-components/forms-and-inputs/ControlledDropdown'
import Image from '../../../generic-components/Image'

const DifficultyDropdown = ({  }) => {
    const [ difficulty, changeDifficulty ] = useState('')

    const setDifficulty = (event: React.ChangeEvent) => {
        const { value: newDifficulty } = event.target as HTMLOptionElement
        changeDifficulty(newDifficulty)
    }

    return (
        <label>

            <ControlledDropdown
                placeholder={'Difficulty'}
                isRequired={true}
                options={undefined}
                value={difficulty}
                onChange={setDifficulty}
            />
        </label>
    )
}

export default DifficultyDropdown