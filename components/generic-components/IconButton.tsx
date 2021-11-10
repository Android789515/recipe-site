import React from 'react'

import useToggle from '../../hooks/useToggle'

interface Props {
    src: string,
    alt: string
}

const IconButton: React.FC<Props> = (props) => {
    const { isToggled, toggle } = useToggle(false)

    return (
        // TODO Maybe make this a div
        <>
            <img src={props.src} alt={props.alt} onClick={toggle}/>

            {isToggled && props.children}
        </>
    )
}

export default IconButton