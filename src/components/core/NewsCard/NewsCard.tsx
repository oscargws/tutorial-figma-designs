import React from 'react'
import AvatarImage from '../AvatarImage'
import {
    Container,
    Image,
    Layout,
    Copy,
    Heading,
    Summary,
    BottomInformation,
    AvatarAndText,
    AuthorDate,
    Name,
    Date,
    Label,
} from './NewsCard.styles'

interface NewsCardProps {
    imageSrc: string
    heading: string
    summary: string
    label: string
    avatarSrc: string
    authorName: string
    dateString: string
    avatarAlt?: string
}

const NewsCard: React.FC<NewsCardProps> = ({
    imageSrc,
    heading,
    summary,
    label,
    avatarSrc,
    authorName,
    dateString,
    avatarAlt = 'Your alt text here',
}) => (
    <Container>
        <Image src={imageSrc} />
        <Layout>
            <Copy>
                <Heading>{heading}</Heading>
                <Summary>{summary}</Summary>
            </Copy>
            <BottomInformation>
                <Label>{label}</Label>
                <AvatarAndText>
                    <AvatarImage src={avatarSrc} alt={avatarAlt} />
                    <AuthorDate>
                        <Name>{authorName}</Name>
                        <Date>{dateString}</Date>
                    </AuthorDate>
                </AvatarAndText>
            </BottomInformation>
        </Layout>
    </Container>
)

export default NewsCard
