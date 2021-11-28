import React from 'react'
import NextImage, { ImageProps } from 'next/image'

interface wrapperProps { className: string }

const Image = ({ className, ...props }: ImageProps & wrapperProps) => (
    <div className={className}>
        <NextImage {...props}/>
    </div>
)

export default Image