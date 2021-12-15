import React from 'react'

import facebookIcon from '../../../public/assets/facebook-icon.svg'
import linkedinIcon from '../../../public/assets/linkedin-icon.svg'
import twitterIcon from '../../../public/assets/twitter-icon.svg'

import SocialMediaIcon from '../../generic-components/icon-buttons/SocialMediaIcon'

const SocialMediaLinks = () => {
    return (
        <ul>
            <li><SocialMediaIcon src={facebookIcon} /></li>

            <li><SocialMediaIcon src={linkedinIcon} /></li>

            <li><SocialMediaIcon src={twitterIcon} /></li>
        </ul>
    )
}

export default SocialMediaLinks