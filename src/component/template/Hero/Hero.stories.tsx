import { ComponentMeta, Story } from '@storybook/react';
import { Hero } from './Hero';
import { propObj } from './Hero.props';
import { HeroProps } from './Hero.type';

export default {
  title: 'template/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
