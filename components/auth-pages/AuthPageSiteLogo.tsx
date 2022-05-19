import { useRouter } from 'next/router'

import Routes from '../../routes/routes'

import styles from '../../styles/auth-pages/AuthPageSiteLogo.module.scss'
import logo from '../../public/favicon.svg'

import Image from '../generic-components/Image'

const AuthPageSiteLogo = () => {
    const router = useRouter()

    const navigateToHome = () => router.push(Routes.home)

    return (
        <Image
            className={styles.logo}
            src={logo}
            alt=''
            onClick={navigateToHome}
        />
    )
}

export default AuthPageSiteLogo