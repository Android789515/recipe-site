import Routes from '../../../routes/routes'

import styles from '../../../styles/auth-pages/AuthForm.module.scss'

import AuthPageSiteLogo from '../AuthPageSiteLogo'
import AuthPageTitle from '../AuthPageTitle'
import SignupInputs from './SignupInputs'
import Button from '../../generic-components/Button'
import AuthPageFooter from '../AuthPageFooter'

const SignupForm = () => {
    return (
        <div className={styles.layout}>
            <AuthPageSiteLogo />

            <AuthPageTitle pageTitle='Signup' />

            <SignupInputs />

            <Button customStyles={styles.authBtn}>
                <p className={styles.authBtnText}>Sign up</p>
            </Button>

            <AuthPageFooter
                text='Already have an account?'
                linkTo={Routes.login}
                linkText='Login'
            />
        </div>
    )
}

export default SignupForm