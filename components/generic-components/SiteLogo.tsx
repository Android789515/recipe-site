import styles from '../../styles/generic-components/SiteLogo.module.scss'
import logo from '../../public/favicon.svg'

import Image from '../generic-components/Image'

const SiteLogo = () => {
    return (
        <Image
            className={styles.logo}
            src={logo}
            alt=''
            role='logo'
        />
    )
}

export default SiteLogo