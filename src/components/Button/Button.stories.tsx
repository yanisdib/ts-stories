import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button as ButtonComponent } from '..';


export default {
    title: 'Components/Button',
    component: ButtonComponent,
    parameters: {
        docs: {
            description: {
                component: 'UI component for user interaction'
            }
        }
    },
    argTypes: {
        size: {
            control: { type: 'radio' },
            defaultValue: 'default',
            description: 'Adjust size',
            name: 'size',
            options: ['small', 'default', 'large'],
            type: { name: 'string', required: false }
        },
        variant: {
            control: { type: 'radio' },
            options: ['primary', 'secondary', 'link']
        }
    }
} as ComponentMeta<typeof ButtonComponent>;


const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />


export const Button = Template.bind({});


Button.args = {
    active: false,
    children: 'Button',
    disabled: false,
    href: undefined,
    onClick: () => { },
    size: 'default',
    variant: 'primary',
};