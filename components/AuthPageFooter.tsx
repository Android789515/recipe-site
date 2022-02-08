import Link from 'next/link'

import styles from '../styles/auth-pages/AuthPageFooter.module.scss'

interface Props {
    text: string
    linkTo: string
    linkText: string
}

const AuthPageFooter = ({ text, linkTo, linkText }: Props) => {
    return (
        <p className={styles.footerText}>
            {text}
            <Link href={linkTo}>
                <a className={styles.signupLink}>{` ${linkText}`}</a>
            </Link>
        </p>
    )
}

export default AuthPageFooter