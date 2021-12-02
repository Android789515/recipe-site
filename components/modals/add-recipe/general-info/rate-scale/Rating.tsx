import React from 'react'

import styles from '../../../../../styles/modals/add-recipe/general-info/rate-scale/Rating.module.scss'

interface Props {
    rating: number
}

const Rating = ({ rating }: Props) => {
    return (
        <p className={styles.ratingParagraph}>
            <span className={styles.rating}>{rating}</span>/5
        </p>
    )
}

export default Rating