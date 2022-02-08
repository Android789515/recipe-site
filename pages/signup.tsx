import { NextPage } from 'next'

import styles from '../styles/auth-pages/AuthPage.module.scss'
import splash from '../public/assets/img/signup-splash.png'


import SiteHead from '../components/generic-components/SiteHead'
import Image from '../components/generic-components/Image'
import SignupForm from '../components/auth-pages/signup-page/SignupForm'

const Signup: NextPage = () => {
    return (
        <div>
            <SiteHead />

            <div className={styles.layout}>
                <Image
                    className={styles.splash}
                    src={splash}
                    layout='responsive'
                    alt='Bread with Salsa on top.'
                />

                <SignupForm />
            </div>
        </div>
    )
}

export default Signup