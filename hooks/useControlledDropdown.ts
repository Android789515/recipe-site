import React, { useState } from 'react'

const useControlledDropdown = (initialOption = '') => {
    const [ option, setOption ] = useState(initialOption)

    const chooseOption = ({ target }: React.ChangeEvent) => {
        const { value } = target as HTMLOptionElement
        setOption(value)
    }

    return { option, chooseOption }
}

export default useControlledDropdown