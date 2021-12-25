import React from 'react'

import styles from '../../styles/generic-components/Widget.module.scss'

interface Props {
    customStyles?: string
}

const Widget: React.FC<Props> = ({ customStyles, children }) => {
    return (
        <div className={`${styles.widget} ${customStyles}`}>
            {children}
        </div>
    )
}

export default Widget