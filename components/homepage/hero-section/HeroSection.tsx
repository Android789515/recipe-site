import React from 'react'

import styles from '../../../styles/homepage/hero-section/HeroSection.module.scss'

import HeroHeader from './HeroHeader'
import HeroBody from './HeroBody'

const HeroSection = () => {
    return (
        <section className={styles.section}>
            <HeroHeader />

            <HeroBody />
        </section>
    )
}

export default HeroSection