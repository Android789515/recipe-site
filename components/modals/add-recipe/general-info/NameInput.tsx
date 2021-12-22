import React from 'react'
import { useRecoilState } from 'recoil'

import { generalInfoData } from '../../../../atoms/recipeInfo'

import ControlledInput from '../../../generic-components/forms-and-inputs/ControlledInput'

const NameInput = () => {
    const [ { name }, updateGeneralInfo ] = useRecoilState(generalInfoData)

    const updateName = (name: string) => {
        updateGeneralInfo(prevInfo => ({ ...prevInfo, name }))
    }

    const setName = (event: React.ChangeEvent) => {
        const { value: name } = event.target as HTMLInputElement

        updateName(name)
    }

    const placeholder = 'Type dish name here'
    return (
        <ControlledInput
            placeholder={placeholder}
            required={true}
            name={'Name'}
            showName={true}
            value={name}
            onChange={setName}
        />
    )
}

export default NameInput