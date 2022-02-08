import React from 'react'
import { storiesOf } from '@storybook/react'
import NewsCard from './NewsCard'
import styled from 'styled-components'

storiesOf('Tutorial/Design System/News Card', module).add('Primary', () => (
    <NewsCard
        heading="Turning figma designs into code"
        summary="A brief tutorial on how to translate Figma designs into re-usable React components using styled-components and storybook"
        label="Tutorial"
        authorName="Oscar"
        dateString="Feb 18, 2021"
        imageSrc="https://www.sustainability-times.com/wp-content/uploads/2019/11/leaves-3420078_960_720.jpg"
        avatarSrc="https://www.smileranch.com/wp-content/uploads/2016/10/Young-man-smiling.jpg"
    />
))
