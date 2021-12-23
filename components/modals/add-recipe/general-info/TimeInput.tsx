import React from 'react'
import { useRecoilState } from 'recoil'
import NextImage from 'next/image'

import styles from '../../../../styles/modals/add-recipe/general-info/TimeInput.module.scss'
import timeIcon from '../../../../public/assets/icons/time.svg'
import { generalInfoData } from '../../../../atoms/recipeInfo'
import inputTypes from '../../../../types/inputTypes'

import ControlledInput from '../../../generic-components/forms-and-inputs/ControlledInput'

const TimeInput = () => {
    const [ { time }, updateGeneralInfo ] = useRecoilState(generalInfoData)

    const updateRecipeTime = (time: number) => {
        updateGeneralInfo(prevInfo => ({ ...prevInfo, time }))
    }

    const setRecipeTime = (event: React.ChangeEvent) => {
        const { value: time } = event.target as HTMLInputElement

        updateRecipeTime(Number(time))
    }

    return (
        <div className={styles.timeInputContainer}>
            <NextImage src={timeIcon} height={32} />

            <ControlledInput
                customLabelStyles={styles.timeInputLabel}
                name={'time'}
                placeholder={'Time'}
                type={inputTypes.text}
                inputMode={'numeric'}
                pattern={'[0-9]*'}
                value={time && String(time) || ''}
                onChange={setRecipeTime}
            />
        </div>
    )
}

export default TimeInput