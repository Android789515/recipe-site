import Link from 'next/link'

import styles from '../../styles/login-page/LoginForm.module.scss'
import logo from '../../public/favicon.svg'

import Image from '../generic-components/Image'
import Button from '../generic-components/Button'
import LoginInputs from './LoginInputs'
import React from 'react'

const LoginForm = () => {
    return (
        <div className={styles.layout}>
            <Image className={styles.logo} src={logo} />

            <h1 className={styles.heading}>Login</h1>

            <LoginInputs formStyles={styles.forms} />
            {/* Big login button */}
            <Button customStyles={styles.loginBtn}>
                <p className={styles.loginText}>Login</p>
            </Button>
            {/* Remember checkbox (left) - Forgot psswd link (right) */}

            {/* Text will be on one line */}
            <p className={styles.footerText}>
                Don’t have an account?
                <Link href={'/signup'}>
                    <a className={styles.signupLink}> Sign up</a>
                </Link>
            </p>
        </div>
    )
}

export default LoginForm