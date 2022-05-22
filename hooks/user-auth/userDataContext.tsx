import React, { createContext, useState } from 'react'

import UserData from '../../types/userData'

const userDataContext = createContext<any>(undefined)

const UserDataProvider: React.FC = ({ children }) => {

    const [ userData, setUserData ] = useState<UserData>()

    const getUsername = () => userData?.username

    const setUser = (userData: UserData) => setUserData(userData)

    return (
        <userDataContext.Provider value={{ getUsername, setUser }}>
            {children}
        </userDataContext.Provider>
    )
}

export { UserDataProvider, userDataContext }