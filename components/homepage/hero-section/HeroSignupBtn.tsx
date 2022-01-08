import React from 'react'
import { useRouter } from 'next/router'

import styles from '../../../styles/homepage/hero-section/HeroSignupBtn.module.scss'

import Button from '../../generic-components/Button'

const HeroSignupBtn = () => {
    const router = useRouter()

    const showSignupPage = () => {
        router.push('/Signup')
    }

    return (
        <Button customStyles={styles.signupBtn} onClick={showSignupPage}>
            <a className={styles.signupText}>Sign up</a>
        </Button>
    )
}

export default HeroSignupBtn