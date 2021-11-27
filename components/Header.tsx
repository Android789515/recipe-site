import React from 'react'
import Image from 'next/image'

import favicon from '../public/favicon.svg'

const Header = ({  }) => {
    return (
        <header>
            <Image src={favicon} />


        </header>
    )
}

export default Header