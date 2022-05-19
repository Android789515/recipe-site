import React from 'react'
import Link from 'next/link'

import Routes from '../../../routes/routes'

const FooterNav = () => {
    return (
        <nav>
            <ul>
                <Link href={Routes.home}>Home</Link>
            </ul>
        </nav>
    )
}

export default FooterNav