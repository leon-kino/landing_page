import { ComponentMeta, Story } from '@storybook/react';
import { CardPriceWhite } from './CardPriceWhite';
import { propObj } from './CardPriceWhite.props';
import { CardPriceWhiteProps } from './CardPriceWhite.type';

export default {
  title: 'molecule/CardPriceWhite',
  component: CardPriceWhite,
} as ComponentMeta<typeof CardPriceWhite>;

const Template: Story<CardPriceWhiteProps> = (args) => <CardPriceWhite {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
