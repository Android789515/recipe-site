import React, { createContext, useState } from 'react'

import User from '../types/user'

const userDataContext = createContext<any>(undefined)

const UserDataProvider: React.FC = ({ children }) => {

    const [ user, updateUser ] = useState<User | undefined>()

    const getUsername = () => user?.username

    const authUser = (user: User) => updateUser(user)

    return (
        <userDataContext.Provider value={{ getUsername, authUser }}>
            {children}
        </userDataContext.Provider>
    )
}

export { UserDataProvider, userDataContext }