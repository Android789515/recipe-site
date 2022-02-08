import { NextPage } from 'next'

import styles from '../styles/auth-pages/AuthPage.module.scss'
import splash from '../public/assets/img/login-splash.png'

import SiteHead from '../components/generic-components/SiteHead'
import Image from '../components/generic-components/Image'

import LoginForm from '../components/auth-pages/login-page/LoginForm'

const Login: NextPage = () => {
    return (
        <div>
            <SiteHead />

            <div className={styles.layout}>
                <Image
                    className={styles.splash}
                    src={splash}
                    layout='responsive'
                    alt='A dish of spaghetti and clams.'
                />

                <LoginForm />
            </div>
        </div>
    )
}

export default Login