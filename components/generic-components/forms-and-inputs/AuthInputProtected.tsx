import React, { useState } from 'react'

import inputTypes from '../../../types/inputTypes'

import lockIcon from '../../../public/assets/icons/password-lock.svg'

import AuthInput from './AuthInput'

interface Props {
    userAuthData: {
        password: string
        update: (event: React.ChangeEvent) => void
    }
}

const AuthInputProtected = ({ userAuthData: { password, update } }: Props) => {
    const [ isPasswordShown, setIsPasswordShown ] = useState(false)

    const showOrHidePassword = () => setIsPasswordShown(isShown => !isShown)

    return (
        <AuthInput
            iconSrc={lockIcon}
            inputType={isPasswordShown ? inputTypes.text : inputTypes.password}
            name='password'
            placeholder='Password'
            isDataSensitive={true}
            isPasswordShown={isPasswordShown}
            showOrHidePassword={showOrHidePassword}
            value={password}
            onChange={update}
        />
    )
}

export default AuthInputProtected