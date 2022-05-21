import { useState } from 'react'

const useUserAuth = () => {
    const [ state, setIsUserAuthed ] = useState(false)

    const isUserAuthed = () => state

    const authUser = () => setIsUserAuthed(true)

    const logoutUser = () => setIsUserAuthed(false)

    return {
        isUserAuthed,
        authUser,
        logoutUser
    }
}

export default useUserAuth