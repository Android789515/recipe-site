import { useRouter } from 'next/router'

import Routes from '../../routes/routes'

import SiteLogo from '../generic-components/SiteLogo'

const AuthPageSiteLogo = () => {
    const router = useRouter()

    const navigateToHome = () => router.push(Routes.home)

    return (
        <div onClick={navigateToHome}>
            <SiteLogo />
        </div>
    )
}

export default AuthPageSiteLogo