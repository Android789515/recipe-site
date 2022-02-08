import styles from '../../../styles/auth-pages/AuthForm.module.scss'
import Button from '../../generic-components/Button'
import AuthPageFooter from '../AuthPageFooter'
import AuthPageSiteLogo from '../AuthPageSiteLogo'
import AuthPageTitle from '../AuthPageTitle'
import SignupInputs from './SignupInputs'

const signupForm = () => {
    return (
        <div className={styles.layout}>
            <AuthPageSiteLogo />

            <AuthPageTitle pageTitle='Signup' />

            <SignupInputs />

            <Button customStyles={styles.authBtn}>
                <p className={styles.authBtnText}>Signup</p>
            </Button>

            <AuthPageFooter
                text='Already have an account?'
                linkTo='/login'
                linkText='Login'
            />
        </div>
    )
}

export default signupForm