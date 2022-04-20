import { ComponentMeta, Story } from '@storybook/react';
import { Benefit } from './Benefit';
import { propObj } from './Benefit.props';
import { BenefitProps } from './Benefit.type';

export default {
  title: 'template/Benefit',
  component: Benefit,
} as ComponentMeta<typeof Benefit>;

const Template: Story<BenefitProps> = (args) => <Benefit {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
