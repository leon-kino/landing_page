import { ComponentMeta, Story } from '@storybook/react';
import Image from 'next/image';
import { Logo } from './Logo';

export default {
  title: 'atom/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: Story = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Image src='/img/Logo.png' alt='/img/Logo.png' width={156} height={60} />,
};
