import { ComponentMeta, Story } from '@storybook/react';
import { White } from './White';

export default {
  title: 'atom/Text/White',
  component: White,
} as ComponentMeta<typeof White>;

const Template: Story = (args) => <White {...args} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { children: <span className='white-xs'>Text</span> };

export const Small = Template.bind({});
Small.args = { children: <span className='white-sm'>Text</span> };

export const Base = Template.bind({});
Base.args = { children: <span className='white-base'>Text</span> };

export const Large = Template.bind({});
Large.args = { children: <span className='white-lg'>Text</span> };

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { children: <span className='white-xl'>Text</span> };

export const ExtraLarge2 = Template.bind({});
ExtraLarge2.args = { children: <span className='white-2xl'>Text</span> };
