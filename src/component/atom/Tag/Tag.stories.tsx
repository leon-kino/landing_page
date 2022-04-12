import { ComponentMeta, Story } from '@storybook/react';
import { Tag } from './Tag';

export default {
  title: 'atom/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: Story = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = { children: <span className='bg-primary-800 py-[3px] px-5 text-white'>tag</span> };
