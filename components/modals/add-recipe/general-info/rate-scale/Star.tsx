import React from 'react'

import greyStar from '../../../../../public/assets/icons/grey-star.svg'
import goldStar from '../../../../../public/assets/icons/gold-star.svg'

import Image from '../../../../generic-components/Image'

interface Props {
    isSelected: boolean
    onClick: (event: React.MouseEvent) => void
}

const Star = ({ isSelected, onClick }: Props) =>
    <Image src={isSelected ? goldStar : greyStar} onClick={onClick} />

export default Star