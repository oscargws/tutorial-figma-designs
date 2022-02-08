import React from 'react'
import styled from 'styled-components'

interface Props {
    alt: string
    src: string
    isGrey?: boolean
}

const Image = styled.img<{ isGrey: boolean }>`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    object-fit: cover;

    filter: ${(p) => (p.isGrey ? 'grayscale(100%)' : 'none')};
`

const AvatarImage = ({ alt, src, isGrey = false }: Props) => {
    return <Image src={src} alt={alt} isGrey={isGrey} />
}

export default AvatarImage
