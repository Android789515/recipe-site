import React from 'react'

import inputTypes from '../../types/inputTypes'

import LoginInput from './LoginInput'

import usernameIcon from '../../public/assets/icons/person.svg'
import passwordEyeIcon from '../../public/assets/icons/password_eye.svg'

interface Props {

}

const LoginForm = (props: Props) => {
    return (
        // TODO add action url
        <form name='login' action='' method='post'>
            <LoginInput
                iconSrc={usernameIcon}
                inputType={inputTypes.text}
                name='username-or-email'
                placeholder='Username or email'
            />

            <LoginInput
                iconSrc={'/placeholder'}
                inputType={inputTypes.password}
                name='password'
                placeholder='Password'
            />
        </form>
    )
}

export default LoginForm