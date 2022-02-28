import React from 'react';
import { ComponentStory } from '@storybook/react';
import PreviewCard from './index';

export default {
    title: 'PreviewCard',
    component: PreviewCard,
}

const Template: ComponentStory<typeof PreviewCard> = (args) => {
    return (
        <>
            <PreviewCard 
                title={args.title}
                description={args.description}
                price={args.price}
                leftDays={args.leftDays}
                producerName={args.producerName}
            />
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    title: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm",
    price: 0.041,
    leftDays: 3,
    producerName: "Jules Wyvern",
};