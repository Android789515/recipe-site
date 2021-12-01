import React, { useState } from 'react'
import Stars from './Stars'

const RateScale = ({  }) => {
    const [ rating, setRating ] = useState(0)

    return (
        <div>
            <Stars rating={rating} />
        </div>
    )
}

export default RateScale