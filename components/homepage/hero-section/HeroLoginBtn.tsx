import React from 'react'
import { useRouter } from 'next/router'

import styles from '../../../styles/homepage/hero-section/HeroLoginBtn.module.scss'

import Button from '../../generic-components/Button'

const HeroLoginBtn = () => {
    const router = useRouter()

    const showLoginPage = () => {
        router.push('/login')
    }

    return (
        <Button customStyles={styles.loginBtn} onClick={showLoginPage}>
            <p className={styles.loginText}>Login</p>
        </Button>
    )
}

export default HeroLoginBtn