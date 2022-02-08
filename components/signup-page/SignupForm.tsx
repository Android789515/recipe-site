import styles from '../../styles/auth-pages/AuthForm.module.scss'
import logo from '../../public/favicon.svg'

import Image from '../generic-components/Image'
import Button from '../generic-components/Button'

const signupForm = () => {
    return (
        <div className={styles.layout}>
            <Image className={styles.logo} src={logo} alt='' />

            <h1 className={styles.heading}>Login</h1>

            {/* SignupInputs formStyles={styles.forms} */}

            <Button customStyles={styles.loginBtn}>
                <p className={styles.loginText}>Login</p>
            </Button>
        </div>
    )
}

export default signupForm