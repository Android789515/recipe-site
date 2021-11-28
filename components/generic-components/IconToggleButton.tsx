import React from 'react'

import useToggle from '../../hooks/useToggle'
import Image from './Image'

interface Props {
    src: string,
    alt: string
}

const IconToggleButton: React.FC<Props> = ({ src, alt, children }) => {
    const { isToggled, toggle } = useToggle(false)

    return (
        <div>
            <Image src={src} alt={alt} onClick={toggle} />

            {isToggled && children}
        </div>
    )
}

export default IconToggleButton