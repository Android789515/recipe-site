import React from 'react'
import LoginInput from './LoginInput'

interface Props {

}

const inputTypes = {
    password: 'password'
}

const LoginForm = (props: Props) => {
    return (
        // TODO add action url
        <form name='login' action='' method='post'>
            <LoginInput
                iconSrc=''
                inputType=''
                name='username-or-email'
                placeholder='Username or email'
            />

            <LoginInput
                iconSrc=''
                inputType={inputTypes.password}
                name='password'
                placeholder='Password'
            />
        </form>
    )
}

export default LoginForm