import React from 'react'
import { useRecoilState } from 'recoil'
import NextImage from 'next/image'

import styles from '../../../../styles/modals/add-recipe/general-info/TotalCalories.module.scss'
import caloriesIcon from '../../../../public/assets/icons/calories.svg'
import { ingredientsData } from '../../../../atoms/recipeInfo'
import { sum } from '../../../../utils/mathUtils'

const TotalCalories = () => {
    const [ ingredients ] = useRecoilState(ingredientsData)

    const getTotalCalories = () => {
        const calories = ingredients.map(ingredient => Number(ingredient.calories))

        return sum(calories)
    }

    return (
        <div className={styles.totalCaloriesContainer}>
            <NextImage src={caloriesIcon} height={32} />

            <p className={styles.totalCalories}>{getTotalCalories()}</p>
        </div>
    )
}

export default TotalCalories