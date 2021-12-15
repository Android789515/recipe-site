import React from 'react'

import logo from '../../../public/logo.svg'

import Image from '../../generic-components/Image'

const Watermark = () => {
    return (
        <div>
            <p>finRecipe</p>

            <Image src={logo} />
        </div>
    )
}

export default Watermark