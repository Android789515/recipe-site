import React from 'react'

import logo from '../../../public/logo.svg'

import Image from '../../generic-components/Image'
import HeroLoginBtn from './HeroLoginBtn'
import HeroHeaderSignupBtn from './HeroHeaderSignupBtn'

const HeroHeader = () => {
    return (
        <header>
            <Image src={logo} />

            <div>
                <HeroHeaderSignupBtn />
                <HeroLoginBtn />
            </div>
        </header>
    )
}

export default HeroHeader