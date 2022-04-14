import { ComponentMeta, Story } from '@storybook/react';
import { Tag } from './Tag';

export default {
  title: 'atom/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: Story = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = { children: <span className='tag'>tag</span> };
