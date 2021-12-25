import React from 'react'

import homeStyles from '../../../styles/homepage/Home.module.scss'

import styles from '../../../styles/homepage/hero-section/HeroSection.module.scss'

import HeroHeader from './HeroHeader'
import HeroBody from './HeroBody'

const HeroSection = () => {
    return (
        <section className={`${styles.heroSection} ${homeStyles.layout}`}>
            <HeroHeader />

            <HeroBody />
        </section>
    )
}

export default HeroSection