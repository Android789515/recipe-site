import React, { useState } from 'react'

import Stars from './Stars'
import Rating from './Rating'

const RateScale = ({  }) => {
    const [ rating, setRating ] = useState(0)

    return (
        <>
            <Stars rating={rating} setRating={setRating} />

            <Rating rating={rating} />
        </>
    )
}

export default RateScale