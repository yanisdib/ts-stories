import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Loader as LoaderComponent } from '..';


export default {
    title: 'Components/Loader',
    component: LoaderComponent,
    parameters: {
        docs: {
            description: {
                component: 'UI component for user interaction'
            }
        }
    },
    argsTypes: {
        animation: {
            control: { type: 'select' },
            defaultValue: 'dot-flashing',
            description: 'Determine loading animation',
            name: 'animation',
            options: ['dot-flashing'],
            type: { name: 'string', required: false }
        }
    }
} as ComponentMeta<typeof LoaderComponent>;


const Template: ComponentStory<typeof LoaderComponent> = (args) => <LoaderComponent {...args} />;


export const Loader = Template.bind({});


Loader.args = {
    animation: 'dot-flashing'
};