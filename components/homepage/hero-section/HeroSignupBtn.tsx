import React from 'react'
import { useRouter } from 'next/router'

import Routes from '../../../routes/routes'

import styles from '../../../styles/homepage/hero-section/HeroSignupBtn.module.scss'

import Button from '../../generic-components/Button'

const HeroSignupBtn = () => {
    const router = useRouter()

    const showSignupPage = () => {
        router.push(Routes.signup)
    }

    return (
        <Button customStyles={styles.signupBtn} onClick={showSignupPage}>
            <a className={styles.signupText}>Sign up</a>
        </Button>
    )
}

export default HeroSignupBtn