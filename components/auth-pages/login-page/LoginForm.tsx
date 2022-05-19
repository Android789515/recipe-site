import Routes from '../../../routes/routes'

import styles from '../../../styles/auth-pages/AuthForm.module.scss'
import loginBtnStyles from '../../../styles/auth-pages/LoginForm_LoginBtn.module.scss'

import AuthPageTitle from '../AuthPageTitle'
import AuthPageSiteLogo from '../AuthPageSiteLogo'
import Button from '../../generic-components/Button'
import LoginInputs from './LoginInputs'
import ExtraLoginDetails from './ExtraLoginDetails'
import AuthPageFooter from '../AuthPageFooter'

const LoginForm = () => {
    return (
        <div className={styles.layout}>
            <AuthPageSiteLogo />

            <AuthPageTitle pageTitle='Login' />

            <LoginInputs />

            <Button customStyles={styles.authBtn}>
                <p className={`${styles.authBtnText} ${loginBtnStyles.loginBtnText}`}>Login</p>
            </Button>
            <ExtraLoginDetails />

            <AuthPageFooter
                text='Don’t have an account?'
                linkTo={Routes.signup}
                linkText='Sign up'
            />
        </div>
    )
}

export default LoginForm