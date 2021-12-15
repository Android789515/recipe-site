import React from 'react'

import useToggle from '../../hooks/useToggle'
import Image from './Image'

interface Props {
    containerStyles?: string
    iconStyles?: string
    imageSrc: string
    render?: any
}

const IconButton = ({ containerStyles, iconStyles, imageSrc, render }: Props) => {
    const { isToggled, toggle } = useToggle()

    return (
        <div className={containerStyles}>
            <Image src={imageSrc} className={iconStyles} onClick={toggle}/>

            { render && render(isToggled) }
        </div>
    )
}

export default IconButton