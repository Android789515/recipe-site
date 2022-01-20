import React, { useState } from 'react'

import inputTypes from '../../types/inputTypes'

import usernameIcon from '../../public/assets/icons/person.svg'

import AuthInput from '../generic-components/forms-and-inputs/AuthInput'

interface Props {
    formStyles: string
}

const LoginInputs = ({ formStyles }: Props) => {
    const [ userAuthData, updateUserAuthData ] = useState({ usernameOrEmail: '', password: '' })

    const updateFormAuthData = (event: React.ChangeEvent) => {
        const inputTypedIn = event.target as HTMLInputElement

        updateUserAuthData(prevAuthData => ({
            ...prevAuthData,
            // Automatically update appropriate input
            [inputTypedIn.name]: inputTypedIn.value
        }))
    }

    const [ isPasswordShown, setIsPasswordShown ] = useState(false)

    const showOrHidePassword = () => setIsPasswordShown(isShown => !isShown)

    return (
        // TODO add action url
        <form name='login' action='' method='post' className={formStyles}>
            <AuthInput
                iconSrc={usernameIcon}
                inputType={inputTypes.text}
                name='usernameOrEmail'
                placeholder='Username or email'
                value={userAuthData.usernameOrEmail}
                onChange={updateFormAuthData}
            />

            <AuthInput
                // TODO - switch to password lock icon once it's received
                iconSrc={usernameIcon}
                inputType={isPasswordShown ? inputTypes.text : inputTypes.password}
                name='password'
                placeholder='Password'
                isDataSensitive={true}
                isPasswordShown={isPasswordShown}
                showOrHidePassword={showOrHidePassword}
                value={userAuthData.password}
                onChange={updateFormAuthData}
            />
        </form>
    )
}

export default LoginInputs