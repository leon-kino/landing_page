import { ComponentMeta, Story } from '@storybook/react';
import { TextHighlight } from './Highlight';

export default {
  title: 'atom/Text/Highlight',
  component: TextHighlight,
} as ComponentMeta<typeof TextHighlight>;

const Template: Story = (args) => <TextHighlight {...args} />;

export const Highlight = Template.bind({});
Highlight.args = { children: <span className='highlight'>Text</span> };
