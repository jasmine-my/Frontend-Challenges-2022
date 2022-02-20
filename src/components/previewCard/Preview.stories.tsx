import React from 'react';
import { ComponentStory } from '@storybook/react';
import PreviewCard from './index';

export default {
    title: 'PreviewCard',
    component: PreviewCard,
}

const Template: ComponentStory<typeof PreviewCard> = () => {
    return (
        <>
            <PreviewCard />
        </>
    );
};

export const Default = Template.bind({});
Default.args = {};