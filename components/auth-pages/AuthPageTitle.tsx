import styles from '../../styles/auth-pages/AuthPageTitle.module.scss'

interface Props {
    pageTitle: 'Login' | 'Signup'
}

const AuthPageTitle = ({ pageTitle }: Props) => {
    return (
        <h1 className={styles.heading}>{pageTitle}</h1>
    )
}

export default AuthPageTitle