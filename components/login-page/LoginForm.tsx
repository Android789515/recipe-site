import Link from 'next/link'

import styles from '../../styles/login-page/LoginForm.module.scss'
import logo from '../../public/favicon.svg'

import LoginInputs from './LoginInputs'
import Image from '../generic-components/Image'

const LoginForm = () => {
    return (
        <div className={styles.layout}>
            <Image src={logo} />

            <h1 className={styles.heading}>Login</h1>

            <LoginInputs />
            {/* Big login button */}
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