import React from 'react'

import styles from '../../../styles/homepage/hero-section/HeroBody.module.scss'

import HeroSignupBtn from './HeroSignupBtn'

const HeroBody = () => {
    return (
        <main className={styles.heroBody}>
            <h1 className={styles.heroTitle}>
                Discover millions of recipes
                exclusive in finleap
            </h1>

            <HeroSignupBtn />
        </main>
    )
}

export default HeroBody