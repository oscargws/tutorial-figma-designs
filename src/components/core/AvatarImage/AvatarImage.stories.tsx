import React from 'react'
import { storiesOf } from '@storybook/react'
import AvatarImage from './AvatarImage'

storiesOf('Tutorial/Design System/Avatar Image', module).add('Primary', () => (
    <AvatarImage
        alt="Young man smiling"
        src="https://www.smileranch.com/wp-content/uploads/2016/10/Young-man-smiling.jpg"
    />
))

storiesOf('Tutorial/Design System/Avatar Image', module).add(
    'Grayscale',
    () => (
        <AvatarImage
            alt="Young man smiling"
            src="https://www.smileranch.com/wp-content/uploads/2016/10/Young-man-smiling.jpg"
            isGrey={true}
        />
    )
)
