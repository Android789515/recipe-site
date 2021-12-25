import React from 'react'
import { useRecoilState } from 'recoil'
import NextImage from 'next/image'

import styles from '../../../../styles/modals/add-recipe/general-info/DifficultyDropdown.module.scss'
import difficultyIcon from '../../../../public/assets/icons/difficulty.svg'
import { generalInfoData } from '../../../../atoms/recipeInfo'
import { capitalize } from '../../../../utils/stringUtils'

import ControlledDropdown from '../../../generic-components/forms-and-inputs/ControlledDropdown'

const DifficultyDropdown = () => {
    enum difficulties {
        easy = 'easy',
        medium = 'medium',
        hard = 'hard'
    }

    const [ { difficulty }, updateGeneralInfo ] = useRecoilState(generalInfoData)

    const setDifficulty = (event: React.ChangeEvent) => {
        const { value: difficulty } = event.target as HTMLOptionElement
        updateGeneralInfo(prevInfo => ({ ...prevInfo, difficulty }))
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
                <option value={difficulties.easy}>
                    {capitalize(difficulties.easy)}
                </option>

                <option value={difficulties.medium}>
                    {capitalize(difficulties.medium)}
                </option>

                <option value={difficulties.hard}>
                    {capitalize(difficulties.hard)}
                </option>
            </ControlledDropdown>
        </div>
    )
}

export default DifficultyDropdown