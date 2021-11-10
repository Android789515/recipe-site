import { useState } from 'react'

const useToggle = (initialToggle: boolean = false) => {
    const [ isToggled, setToggle ] = useState(initialToggle)

    const toggle = () => setToggle(prevToggle => !prevToggle)

    return { isToggled, toggle }
}

export default useToggle