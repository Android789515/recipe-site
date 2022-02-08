import styles from '../../styles/auth-pages/AuthForm.module.scss'
import logo from '../../public/favicon.svg'

import Image from '../generic-components/Image'
import Button from '../generic-components/Button'
import LoginInputs from './LoginInputs'
import ExtraLoginDetails from './ExtraLoginDetails'
import AuthPageFooter from '../AuthPageFooter'

const LoginForm = () => {
    return (
        <div className={styles.layout}>
            <Image className={styles.logo} src={logo} alt='' />

            <h1 className={styles.heading}>Login</h1>

            <LoginInputs formStyles={styles.forms} />

            <Button customStyles={styles.loginBtn}>
                <p className={styles.loginText}>Login</p>
            </Button>
            <ExtraLoginDetails />

            <AuthPageFooter
                text='Don’t have an account?'
                linkTo='/signup'
                linkText='Sign up'
            />
        </div>
    )
}

export default LoginForm