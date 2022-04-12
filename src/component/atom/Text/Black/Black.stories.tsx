import { ComponentMeta, Story } from '@storybook/react';
import { Black } from './Black';

export default {
  title: 'atom/Text/Black',
  component: Black,
} as ComponentMeta<typeof Black>;

const Template: Story = (args) => <Black {...args} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { children: <span className='black-xs'>Text</span> };

export const Small = Template.bind({});
Small.args = { children: <span className='black-sm'>Text</span> };

export const Base = Template.bind({});
Base.args = { children: <span className='black-base'>Text</span> };

export const Large = Template.bind({});
Large.args = { children: <span className='black-lg'>Text</span> };

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { children: <span className='black-xl'>Text</span> };

export const ExtraLarge2 = Template.bind({});
ExtraLarge2.args = { children: <span className='black-2xl'>Text</span> };
