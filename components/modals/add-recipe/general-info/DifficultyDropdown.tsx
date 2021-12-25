import React, { useState } from 'react'
import NextImage from 'next/image'

import styles from '../../../../styles/modals/add-recipe/general-info/DifficultyDropdown.module.scss'
import difficultyIcon from '../../../../public/assets/icons/difficulty.svg'

import ControlledDropdown from '../../../generic-components/forms-and-inputs/ControlledDropdown'

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
            <NextImage src={difficultyIcon} height={32} />

            <ControlledDropdown
                customStyles={styles.dropdown}
                placeholder={'Difficulty'}
                isRequired={true}
                value={difficulty}
                onChange={setDifficulty}
            >
                <option value={'Easy'}>Easy</option>
                <option value={'Medium'}>Medium</option>
                <option value={'Hard'}>Hard</option>
            </ControlledDropdown>
        </div>
    )
}

export default DifficultyDropdown