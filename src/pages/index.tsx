import * as React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import NewsCard from 'components/core/NewsCard'

interface IndexProps {}

const Grid = styled.div`
    display: grid;
    grid-template-columns: 350px 350px 350px;
    grid-gap: 40px;
    padding: 40px;
`

const Index: NextPage<IndexProps> = () => {
    return (
        <Grid>
            <NewsCard
                heading="Turning figma designs into code"
                summary="A brief tutorial on how to translate Figma designs into re-usable React components using styled-components and storybook"
                label="Tutorial"
                authorName="Oscar"
                dateString="Feb 18, 2021"
                imageSrc="https://www.sustainability-times.com/wp-content/uploads/2019/11/leaves-3420078_960_720.jpg"
                avatarSrc="https://www.smileranch.com/wp-content/uploads/2016/10/Young-man-smiling.jpg"
            />
            <NewsCard
                heading="Twitch questions"
                summary="A brief tutorial on how to translate Figma designs into re-usable React components using styled-components and storybook"
                label="Tutorial"
                authorName="Oscar"
                dateString="Feb 18, 2021"
                imageSrc="https://www.sustainability-times.com/wp-content/uploads/2019/11/leaves-3420078_960_720.jpg"
                avatarSrc="https://www.smileranch.com/wp-content/uploads/2016/10/Young-man-smiling.jpg"
            />
            <NewsCard
                heading="Turning figma designs into code"
                summary="A brief tutorial on how to translate Figma designs into re-usable React components using styled-components and storybook"
                label="Tutorial"
                authorName="Oscar"
                dateString="Feb 18, 2021"
                imageSrc="https://www.sustainability-times.com/wp-content/uploads/2019/11/leaves-3420078_960_720.jpg"
                avatarSrc="https://www.smileranch.com/wp-content/uploads/2016/10/Young-man-smiling.jpg"
            />
        </Grid>
    )
}

export default Index
