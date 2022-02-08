import inputTypes from '../../../types/inputTypes'
import useControlledAuthForm from '../../../hooks/useControlledAuthForm'

import styles from '../../../styles/auth-pages/AuthForm.module.scss'
import usernameIcon from '../../../public/assets/icons/person.svg'

import AuthInput from '../../generic-components/forms-and-inputs/AuthInput'
import AuthInputProtected from '../../generic-components/forms-and-inputs/AuthInputProtected'

const LoginInputs = () => {
    const { userAuthData, updateFormAuthData } = useControlledAuthForm({ username: '', password: '' })

    return (
        // TODO add action url
        <form name='login' action='' method='post' className={styles.forms}>
            <AuthInput
                iconSrc={usernameIcon}
                inputType={inputTypes.text}
                name='username'
                placeholder='Username or email'
                value={userAuthData.username}
                onChange={updateFormAuthData}
            />

            <AuthInputProtected
                userAuthData={{
                    password: userAuthData.password,
                    update: updateFormAuthData
                }}
            />
        </form>
    )
}

export default LoginInputs