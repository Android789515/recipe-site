import React, { useState } from 'react'

interface AuthData {
    username: string
    email?: string
    password: string
}

const useControlledAuthForm = (authData: AuthData) => {
    const [ userAuthData, updateUserAuthData ] = useState(authData)

    const updateFormAuthData = (event: React.ChangeEvent) => {
        const inputTypedIn = event.target as HTMLInputElement

        updateUserAuthData(prevAuthData => ({
            ...prevAuthData,
            // Automatically update appropriate input
            [inputTypedIn.name]: inputTypedIn.value
        }))
    }

    return { userAuthData, updateFormAuthData }
}

export default useControlledAuthForm