import React from 'react'

interface Props {
    entryId: string,
    index: number,
    text: string
}

const RecipeStep = ({ index, text }: Props) => {
    return (
        <li>
            <p>{index}</p>

            <p>{text}</p>
        </li>
    )
}

export default RecipeStep