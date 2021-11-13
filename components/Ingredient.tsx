import React from 'react'

import styles from '../styles/Ingredient.module.scss'

interface Props {
    entryId: string
    name: string,
    calories: number,
    index: number
}

const Ingredient = ({ name, calories, index }: Props) => {
    return (
        <li className={styles.layout}>
            <p className={styles.index}>{index}</p>

            <p className={styles.name}>{name}</p>

            <span className={styles.calories}>{calories}</span>
        </li>
    )
}

export default Ingredient