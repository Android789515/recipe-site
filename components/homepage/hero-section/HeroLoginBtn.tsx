import React from 'react'

import styles from '../../../styles/homepage/hero-section/HeroLoginBtn.module.scss'

import Button from '../../generic-components/Button'

const HeroLoginBtn = () => {
    return (
        <Button customClass={styles.btn}>
            <p>Login</p>
        </Button>
    )
}

export default HeroLoginBtn