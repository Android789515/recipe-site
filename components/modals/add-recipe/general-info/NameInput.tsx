import React from 'react'
import { useRecoilState } from 'recoil'

import styles from '../../../../styles/modals/add-recipe/general-info/NameInput.module.scss'
import recipeInfo from '../../../../atoms/recipeInfo'

import ControlledInput from '../../../generic-components/forms-and-inputs/ControlledInput'

const NameInput = () => {
    const [ recipeData, updateRecipeData ] = useRecoilState(recipeInfo)
    const { name } = recipeData.generalInfo

    const updateName = (name: string) => {
        updateRecipeData({ ...recipeData, generalInfo: { ...recipeData.generalInfo, name } })
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