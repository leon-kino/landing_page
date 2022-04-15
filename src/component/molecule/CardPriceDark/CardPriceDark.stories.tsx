import { ComponentMeta, Story } from '@storybook/react';
import { CardPriceDark } from './CardPriceDark';
import { propObj } from './CardPriceDark.props';
import { CardPriceDarkProps } from './CardPriceDark.type';

export default {
  title: 'molecule/CardPriceDark',
  component: CardPriceDark,
} as ComponentMeta<typeof CardPriceDark>;

const Template: Story<CardPriceDarkProps> = (args) => <CardPriceDark {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
