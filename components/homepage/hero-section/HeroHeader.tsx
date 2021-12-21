import React from 'react'

import styles from '../../../styles/homepage/hero-section/HeroHeader.module.scss'
import logo from '../../../public/logo.svg'

import Image from '../../generic-components/Image'
import HeroLoginBtn from './HeroLoginBtn'
import HeroHeaderSignupBtn from './HeroHeaderSignupBtn'

const HeroHeader = () => {
    return (
        <header className={styles.heroHeader}>
            <Image src={logo} width={30} />

            <div className={styles.btns}>
                <HeroHeaderSignupBtn />
                <HeroLoginBtn />
            </div>
        </header>
    )
}

export default HeroHeader