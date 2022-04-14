import { ComponentMeta, Story } from '@storybook/react';
import { CardBaseColor } from './CardBaseColor';
import { propObj } from './CardBaseColor.props';
import { CardBaseColorProps } from './CardBaseColor.type';

export default {
  title: 'molecule/CardBaseColor',
  component: CardBaseColor,
} as ComponentMeta<typeof CardBaseColor>;

const Template: Story<CardBaseColorProps> = (args) => <CardBaseColor {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
