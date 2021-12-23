import React from 'react'
import { useRecoilState } from 'recoil'

import styles from '../../../../../styles/modals/add-recipe/general-info/rate-scale/RateScale.module.scss'
import { generalInfoData } from '../../../../../atoms/recipeInfo'

import Stars from './Stars'
import Rating from './Rating'

const RateScale = () => {
    const [ { rating }, updateGeneralInfo ] = useRecoilState(generalInfoData)

    const setRating = (rating: number) => {
        updateGeneralInfo(prevInfo => ({ ...prevInfo, rating }))
    }

    return (
        <div className={styles.rateScale}>
            <div className={styles.rateInterface}>
                <Stars rating={rating} setRating={setRating} />
                <span className={styles.rate}>Rate</span>
            </div>

            <Rating rating={rating} />
        </div>
    )
}

export default RateScale