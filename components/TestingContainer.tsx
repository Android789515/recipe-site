import React from 'react'

import styles from '../styles/TestingContainer.module.scss'

const TestingContainer: React.FC = ({ children }) => {
    return (
        <div className={styles.testingContainer}>
            {children}
        </div>
    )
}

export default TestingContainer