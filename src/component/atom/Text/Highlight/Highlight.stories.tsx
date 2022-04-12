import { ComponentMeta, Story } from '@storybook/react';
import { TextHighlight } from './Highlight';

export default {
  title: 'atom/Text/Highlight',
  component: TextHighlight,
} as ComponentMeta<typeof TextHighlight>;

const Template: Story = (args) => <TextHighlight {...args} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { children: <span className='highlight-xs'>Text</span> };

export const Small = Template.bind({});
Small.args = { children: <span className='highlight-sm'>Text</span> };

export const Base = Template.bind({});
Base.args = { children: <span className='highlight-base'>Text</span> };

export const Large = Template.bind({});
Large.args = { children: <span className='highlight-lg'>Text</span> };

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { children: <span className='highlight-xl'>Text</span> };

export const ExtraLarge2 = Template.bind({});
ExtraLarge2.args = { children: <span className='highlight-2xl'>Text</span> };
