import React, { useState } from 'react'
import Image from 'next/image'

import styles from '../../../../styles/modals/add-recipe/general-info/DifficultyDropdown.module.scss'
import difficultyIcon from '../../../../public/assets/icons/difficulty.svg'

import ControlledDropdown from '../../../generic-components/forms-and-inputs/ControlledDropdown'
// import Image from '../../../generic-components/Image'

const DifficultyDropdown = () => {
    enum difficulties {
        easy = 'easy',
        medium = 'medium',
        hard = 'hard'
    }

    const [ difficulty, changeDifficulty ] = useState('')

    const setDifficulty = (event: React.ChangeEvent) => {
        const { value: newDifficulty } = event.target as HTMLOptionElement
        changeDifficulty(newDifficulty)
    }

    return (
        <div className={styles.dropdownContainer}>
            <Image src={difficultyIcon} height={32} />

            <ControlledDropdown
                customStyles={styles.dropdown}
                placeholder={'Difficulty'}
                isRequired={true}
                options={undefined}
                value={difficulty}
                onChange={setDifficulty}
            />
        </div>
    )
}

export default DifficultyDropdown