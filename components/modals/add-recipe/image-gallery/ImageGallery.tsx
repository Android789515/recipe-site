import React from 'react'

import styles from '../../../../styles/modals/add-recipe/image-gallery/ImageGallery.module.scss'

import Image from '../../../generic-components/Image'

const ImageGallery = () => {
    return (
        <div className={styles.layout}>
            <Image src={'/'} width={0} height={0} alt={'Upload icon'} />
            <p className={styles.uploadImagesText}>Upload images</p>
        </div>
    )
}

export default ImageGallery