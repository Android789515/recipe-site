import React from 'react'

import Watermark from './Watermark'
import FooterNav from './FooterNav'
import SocialMediaLinks from './SocialMediaLinks'

const HomeFooter = () => {
    return (
        <footer>
            <Watermark />

            <FooterNav />

            <SocialMediaLinks />
        </footer>
    )
}

export default HomeFooter