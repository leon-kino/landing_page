import { ComponentMeta, Story } from '@storybook/react';
import { Sympathy } from './Sympathy';
import { propObj } from './Sympathy.props';
import { SympathyProps } from './Sympathy.type';

export default {
  title: 'template/Sympathy',
  component: Sympathy,
} as ComponentMeta<typeof Sympathy>;

const Template: Story<SympathyProps> = (args) => <Sympathy {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
