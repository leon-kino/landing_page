import { ComponentMeta, Story } from '@storybook/react';
import { CardBaseTag } from './CardBaseTag';
import { propObj } from './CardBaseTag.props';
import { CardBaseTagProps } from './CardBaseTag.type';

export default {
  title: 'molecule/CardBaseTag',
  component: CardBaseTag,
} as ComponentMeta<typeof CardBaseTag>;

const Template: Story<CardBaseTagProps> = (args) => <CardBaseTag {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
