import React, { Dispatch, SetStateAction } from 'react'
import { v4 as uuid } from 'uuid'

import styles from '../../../../../styles/modals/add-recipe/general-info/rate-scale/Stars.module.scss'

import Star from './Star'

interface Props {
    rating: number
    setRating: Dispatch<SetStateAction<number>>
}

const Stars = ({ rating, setRating }: Props) => {
    // Makes a max rating of 1-5 instead of 0-4
    const oneToFiveRating = [...Array(6).keys()].filter(num => num > 0)

    const renderStar = (starNum: number) => {
        const shouldStarBeSelected = rating >= starNum

        return <Star key={uuid()} isSelected={shouldStarBeSelected} onClick={() => setRating(starNum)} />
    }

    const stars = oneToFiveRating.map(renderStar)

    return (
        <div className={styles.stars}>
            {stars}
        </div>
    )
}

export default Stars