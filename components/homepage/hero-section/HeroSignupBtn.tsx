import React from 'react'

import styles from '../../../styles/homepage/hero-section/HeroSignupBtn.module.scss'

import Button from '../../generic-components/Button'

const HeroSignupBtn = () => {
    return (
        <Button customStyles={styles.signupBtn}>
            <p className={styles.signupText}>Sign up</p>
        </Button>
    )
}

export default HeroSignupBtn