import React from 'react'
import { useRouter } from 'next/router'

import Routes from '../../../routes/routes'

import styles from '../../../styles/homepage/hero-section/HeroHeaderSignupBtn.module.scss'

import Button from '../../generic-components/Button'

const HeroHeaderSignupBtn = () => {
    const router = useRouter()

    const showSignupPage = () => {
        router.push(Routes.signup)
    }

    return (
        <Button customStyles={styles.signupBtn} onClick={showSignupPage}>
            <p className={styles.signupText}>Sign up</p>
        </Button>
    )
}

export default HeroHeaderSignupBtn