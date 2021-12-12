import React from 'react'
import { useRecoilState } from 'recoil'

import { generalInfoData } from '../../../../../atoms/recipeInfo'

import Stars from './Stars'
import Rating from './Rating'

const RateScale = () => {
    const [ { rating }, updateGeneralInfo ] = useRecoilState(generalInfoData)

    const setRating = (rating: number) => {
        updateGeneralInfo(prevInfo => ({ ...prevInfo, rating }))
    }

    return (
        <>
            <Stars rating={rating} setRating={setRating} />

            <Rating rating={rating} />
        </>
    )
}

export default RateScale