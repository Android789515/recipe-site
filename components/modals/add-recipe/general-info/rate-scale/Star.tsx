import React from 'react'

import styles from '../../../../../styles/modals/add-recipe/general-info/rate-scale/Star.module.scss'
import greyStar from '../../../../../public/assets/icons/grey-star.svg'
import goldStar from '../../../../../public/assets/icons/gold-star.svg'

import Image from '../../../../generic-components/Image'

interface Props {
    isSelected: boolean
    onClick: (event: React.MouseEvent) => void
}

const Star = ({ isSelected, onClick }: Props) =>
    <Image
        className={styles.star}
        src={isSelected ? goldStar : greyStar}
        draggable={false}
        onClick={onClick}
    />

export default Star