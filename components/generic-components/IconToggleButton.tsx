import React from 'react'

import useToggle from '../../hooks/useToggle'

interface Props {
    src: string,
    alt: string
}

const IconToggleButton: React.FC<Props> = ({ src, alt, children }) => {
    const { isToggled, toggle } = useToggle(false)

    return (
        <div>
            <img src={src} alt={alt} onClick={toggle}/>

            {isToggled && children}
        </div>
    )
}

export default IconToggleButton