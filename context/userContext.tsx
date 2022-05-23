import React, { createContext, useState } from 'react'

import User from '../types/user'

interface UserContextMethods {
    getUsername: () => string | undefined
    authUser: (user: User) => void
    isUserAuthed: () => boolean
}

const userContext = createContext<UserContextMethods | undefined>(undefined)

const UserProvider: React.FC = ({ children }) => {

    const [ user, updateUser ] = useState<User | undefined>()

    const getUsername = () => user?.username

    const authUser = (user: User) => updateUser(user)

    const isUserAuthed = () => user !== undefined

    return (
        <userContext.Provider value={{ getUsername, authUser, isUserAuthed }}>
            {children}
        </userContext.Provider>
    )
}

export { UserProvider, userContext }