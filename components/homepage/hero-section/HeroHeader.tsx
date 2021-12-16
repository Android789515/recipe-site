import React from 'react'

import logo from '../../../public/logo.svg'

import Image from '../../generic-components/Image'
import HeroLoginBtn from './HeroLoginBtn'

const HeroHeader = () => {
    return (
        <header>
            <Image src={logo} />

            <HeroLoginBtn />
        </header>
    )
}

export default HeroHeader