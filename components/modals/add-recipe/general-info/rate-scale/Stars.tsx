import React from 'react'
import { v4 as uuid } from 'uuid'

import styles from '../../../../../styles/modals/add-recipe/general-info/rate-scale/Stars.module.scss'
import { range } from '../../../../../utils/mathUtils'

import Star from './Star'

interface Props {
    rating: number
    setRating: (rating: number) => void
}

const Stars = ({ rating, setRating }: Props) => {
    const oneToFiveRating = range(1, 5)

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