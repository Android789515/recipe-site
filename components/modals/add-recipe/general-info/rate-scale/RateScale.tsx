import React from 'react'
import { useRecoilState } from 'recoil'

import recipeInfo from '../../../../../atoms/recipeInfo'

import Stars from './Stars'
import Rating from './Rating'

const RateScale = () => {
    const [ recipeData, updateRecipeData ] = useRecoilState(recipeInfo)
    const { rating } = recipeData.generalInfo

    const setRating = (rating: number) => {
        updateRecipeData({ ...recipeData, generalInfo: { ...recipeData.generalInfo, rating } })
    }

    return (
        <>
            <Stars rating={rating} setRating={setRating} />

            <Rating rating={rating} />
        </>
    )
}

export default RateScale