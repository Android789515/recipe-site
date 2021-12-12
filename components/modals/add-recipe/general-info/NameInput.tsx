import React from 'react'
import { useRecoilState } from 'recoil'

import styles from '../../../../styles/modals/add-recipe/general-info/NameInput.module.scss'
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
        <label className={styles.label}>
            <p className={styles.labelText}>Name</p>

            <ControlledInput
                className={styles.input}
                placeholder={placeholder}
                required={true}
                name={'Name'}
                value={name}
                onChange={setName}
            />
        </label>
    )
}

export default NameInput