import React from 'react'
import { useRecoilState } from 'recoil'
import NextImage from 'next/image'

import styles from '../../../../styles/modals/add-recipe/general-info/TotalCalories.module.scss'
import caloriesIcon from '../../../../public/assets/icons/calories.svg'

import { generalInfoData } from '../../../../atoms/recipeInfo'

const TotalCalories = () => {
    const [ { totalCalories } ] = useRecoilState(generalInfoData)

    return (
        <div className={styles.totalCaloriesContainer}>
            <NextImage src={caloriesIcon} height={32} />

            <p className={styles.totalCalories}>{totalCalories}</p>
        </div>
    )
}

export default TotalCalories