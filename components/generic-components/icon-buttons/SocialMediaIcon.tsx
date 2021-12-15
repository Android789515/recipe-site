import React from 'react'

import IconButton from '../IconButton'

interface Props {
    src: string
}

const SocialMediaIcon = ({ src }: Props) => {
    return (
        <IconButton imageSrc={src} />
    )
}

export default SocialMediaIcon