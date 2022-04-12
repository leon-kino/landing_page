import { ComponentMeta, Story } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'atom/Text/Primary',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: Story = (args) => <Text {...args} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { children: <span className='primary-xs'>Text</span> };

export const Small = Template.bind({});
Small.args = { children: <span className='primary-sm'>Text</span> };

export const Base = Template.bind({});
Base.args = { children: <span className='primary-base'>Text</span> };

export const Large = Template.bind({});
Large.args = { children: <span className='primary-lg'>Text</span> };

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { children: <span className='primary-xl'>Text</span> };

export const ExtraLarge2 = Template.bind({});
ExtraLarge2.args = { children: <span className='primary-2xl'>Text</span> };
