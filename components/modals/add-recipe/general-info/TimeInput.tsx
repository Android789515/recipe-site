import React from 'react'
import { useRecoilState } from 'recoil'

import styles from '../../../../styles/modals/add-recipe/general-info/TimeInput.module.scss'
import { generalInfoData } from '../../../../atoms/recipeInfo'
import inputTypes from '../../../../types/inputTypes'

import ControlledInput from '../../../generic-components/forms-and-inputs/ControlledInput'

const TimeInput = () => {
    const [ { time }, updateGeneralInfo ] = useRecoilState(generalInfoData)


    return (
        <ControlledInput
            customStyles={styles.timeInput}
            name={'time'}
            placeholder={'Time'}
            type={inputTypes.text}
            inputMode={'numeric'}
            pattern={'[0-9]*'}
            value={String(time)}
            onChange={() => {}}
        />
    )
}

export default TimeInput