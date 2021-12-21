import React from 'react'

import styles from '../../../styles/homepage/hero-section/HeroHeaderSignupBtn.module.scss'

import Button from '../../generic-components/Button'

const HeroHeaderSignupBtn = () => {
    return (
        <Button customClass={styles.signupBtn}>
            <p className={styles.signupText}>Sign up</p>
        </Button>
    )
}

export default HeroHeaderSignupBtn