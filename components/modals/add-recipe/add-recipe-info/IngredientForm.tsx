import React from 'react'

import styles from '../../../../styles/modals/add-recipe/add-recipe-info/IngredientForm.module.scss'
import inputStyles from '../../../../styles/modals/add-recipe/add-recipe-info/recipeInput.module.scss'

import inputTypes from '../../../../types/inputTypes'

import ControlledInput from '../../../generic-components/forms-and-inputs/ControlledInput'

interface Props {
    nameValue: string
    caloriesValue: string
    isActiveForm: boolean
    activeInput: string
    nameOnChange: React.ChangeEventHandler
    caloriesOnChange: React.ChangeEventHandler
}

const IngredientForm =
    ({ nameValue, nameOnChange, caloriesValue, caloriesOnChange, isActiveForm, activeInput }: Props) => {

    const inputs = {
        name: 'name',
        calories: 'calories'
    }

    return (
        <div className={styles.inputs}>
            <ControlledInput
                customStyles={inputStyles.recipeInput}
                name='ingredient-name'
                type={inputTypes.text}
                placeholder='Enter your Ingredient'
                required
                focus={isActiveForm && activeInput === inputs.name}
                value={nameValue}
                onChange={nameOnChange}
            />
            <ControlledInput
                customStyles={inputStyles.recipeInput}
                name='calories'
                type={inputTypes.text}
                inputMode={'numeric'}
                pattern={'[0-9]*'}
                placeholder='Calories'
                required={false}
                focus={isActiveForm && activeInput === inputs.calories}
                value={String(caloriesValue)}
                onChange={caloriesOnChange}
            />
        </div>
    )
}

export default IngredientForm