import { ComponentMeta, Story } from '@storybook/react';
import { Pricing } from './Pricing';
import { propObj } from './Pricing.props';
import { PricingProps } from './Pricing.type';

export default {
  title: 'template/Pricing',
  component: Pricing,
} as ComponentMeta<typeof Pricing>;

const Template: Story<PricingProps> = (args) => <Pricing {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
