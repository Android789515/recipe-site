import { useContext } from 'react'
import type { NextPage } from 'next'

import { userContext } from '../context/userContext'

import Home from './home'
import Recipes from './recipes'

const Index: NextPage = () => {
    const { isUserAuthed } = useContext(userContext)!

    return (
        <div>
            {isUserAuthed() ? <Recipes /> : <Home />}
        </div>
    )
}

export default Index