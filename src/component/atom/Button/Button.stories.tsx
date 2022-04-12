import { ComponentMeta, Story } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'atom/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story = (args) => <Button {...args} />;

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  children: <span className='button-primary-default'>button</span>,
};

export const PrimaryHover = Template.bind({});
PrimaryHover.args = {
  children: <span className='button-primary-hover'>button</span>,
};
export const OrangeDefault = Template.bind({});
OrangeDefault.args = {
  children: <span className='button-orange-default'>button</span>,
};
export const OrangeHover = Template.bind({});
OrangeHover.args = {
  children: <span className='button-orange-hover'>button</span>,
};
