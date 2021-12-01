import React from 'react'
import { v4 as uuid } from 'uuid'

import Star from './Star'

interface Props {
    rating: number
}

const Stars = ({ rating }: Props) => {
    const maxRating = [...Array(5).keys()]

    const renderStar = (starNum: number) => <Star key={uuid()} isSelected={rating  > starNum} />
    const stars = maxRating.map(renderStar)

    return (
        <div>
            {stars}
        </div>
    )
}

export default Stars