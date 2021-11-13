import React from 'react'

import inputTypes from '../../types/inputTypes'

import LoginInput from './LoginInput'

interface Props {

}

const LoginForm = (props: Props) => {
    return (
        // TODO add action url
        <form name='login' action='' method='post'>
            <LoginInput
                iconSrc=''
                inputType={inputTypes._text}
                name='username-or-email'
                placeholder='Username or email'
            />

            <LoginInput
                iconSrc=''
                inputType={inputTypes._password}
                name='password'
                placeholder='Password'
            />
        </form>
    )
}

export default LoginForm