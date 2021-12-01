import React, { useState } from 'react'
import Stars from './Stars'

const RateScale = ({  }) => {
    const [ rating, setRating ] = useState(0)

    return (
        <div>
            <Stars rating={rating} setRating={setRating} />
        </div>
    )
}

export default RateScale