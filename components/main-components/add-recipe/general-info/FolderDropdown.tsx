import React, { ChangeEvent, useState } from 'react'

const FolderDropdown = ({  }) => {
    const [ option, setOption ] = useState('Please select an option')

    const chooseOption = ({ target }: React.ChangeEvent) => {
        const { value } = target as HTMLOptionElement
        setOption(value)
    }

    // Need to get list of folders
    return (
        <label>
            <select value={option} required>

            </select>
        </label>
    )
}

export default FolderDropdown