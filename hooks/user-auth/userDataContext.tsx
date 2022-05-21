import React, { createContext } from 'react'

import UserData from '../../types/userData'

const userDataContext = createContext<UserData>({})

const UserDataProvider: React.FC = ({ children }) => {


    return (
        <userDataContext.Provider value={{}}>
            {children}
        </userDataContext.Provider>
    )
}

export { UserDataProvider, userDataContext }