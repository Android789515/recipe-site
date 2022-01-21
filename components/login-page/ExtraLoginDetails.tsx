import styles from '../../styles/login-page/ExtraLoginDetails.module.scss'

import inputTypes from '../../types/inputTypes'

const ExtraLoginDetails = () => {
    return (
        <div className={styles.extraLoginDetails}>
            <label className={styles.rememberMeLabel}>
                <input className={styles.rememberMeCheckbox} type={inputTypes.checkbox} />

                 Remember me
            </label>

            <a className={styles.forgotPasswordLink}>Forgot password?</a>
        </div>
    )
}

export default ExtraLoginDetails