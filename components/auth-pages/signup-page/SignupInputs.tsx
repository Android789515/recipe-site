import inputTypes from '../../../types/inputTypes'

import styles from '../../../styles/auth-pages/AuthForm.module.scss'
import usernameIcon from '../../../public/assets/icons/person.svg'
import emailIcon from '../../../public/assets/icons/email.svg'

import AuthInput from '../../generic-components/forms-and-inputs/AuthInput'
import useControlledAuthForm from '../../../hooks/useControlledAuthForm'
import AuthInputProtected from '../../generic-components/forms-and-inputs/AuthInputProtected'

const SignupInputs = () => {
    const { userAuthData, updateFormAuthData } = useControlledAuthForm({ username: '', email: '', password: '' })

    return (
        <form name='signup' action='' method='post' className={styles.forms}>
            <AuthInput
                iconSrc={usernameIcon}
                inputType={inputTypes.text}
                name='username'
                placeholder='Username'
                value={userAuthData.username}
                onChange={updateFormAuthData}
            />

            <AuthInput
                iconSrc={emailIcon}
                inputType={inputTypes.email}
                name='email'
                placeholder='Email'
                value={userAuthData.email!}
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

export default SignupInputs