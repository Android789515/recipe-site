import { NextPage } from 'next'

import styles from '../styles/login-page/Login.module.scss'
import splash from '../public/assets/img/login-splash.png'

import SiteHead from '../components/generic-components/SiteHead'
import Image from '../components/generic-components/Image'

import LoginForm from '../components/login-page/LoginForm'

const Login: NextPage = () => {
    return (
        <div>
            <SiteHead />

            <div className={styles.layout}>
                {/* Main image */}
                <Image
                    className={styles.splash}
                    src={splash}
                    layout='responsive'
                    alt='A dish of spaghetti and clams.'
                />

                {/* Forms */}
                <LoginForm />
            </div>
        </div>
    )
}

export default Login