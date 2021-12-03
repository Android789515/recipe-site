import React from 'react'
import useControlledDropdown from '../../../../hooks/useControlledDropdown'

const DifficultyDropdown = ({  }) => {
    const { option, chooseOption } = useControlledDropdown()

    return (
        <label>
            <select value={option} onChange={chooseOption}>
                <option disabled>Difficulty</option>
            </select>
        </label>
    )
}

export default DifficultyDropdown