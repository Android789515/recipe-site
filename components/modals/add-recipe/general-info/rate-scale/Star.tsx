import React from 'react'

import greyStar from '../../../../../public/assets/icons/grey-star.svg'
import goldStar from '../../../../../public/assets/icons/gold-star.svg'

import Image from '../../../../generic-components/Image'

interface Props {
    conditional: boolean
}

// TODO refactor
const Star = ({ conditional }: Props) => conditional ? <Image src={goldStar} /> : <Image src={greyStar} />

export default Star