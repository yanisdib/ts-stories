import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tag as TagComponent } from '..';


export default {
    title: 'Components/Tag',
    component: TagComponent,
    parameters: {
        docs: {
            description: {
                component: 'UI component for user interactions'
            }
        }
    }
} as ComponentMeta<typeof TagComponent>;


const Template: ComponentStory<typeof TagComponent> = (args) => <TagComponent {...args} />;


export const Tag = Template.bind({});


Tag.args = {
    children: 'Tag',
    disabled: false,
    onClick: () => { },
    selected: false
}