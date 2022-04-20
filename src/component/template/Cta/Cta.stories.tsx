import { ComponentMeta, Story } from '@storybook/react';
import { Cta } from './Cta';
import { propObj } from './Cta.props';
import { CtaProps } from './Cta.type';

export default {
  title: 'template/Cta',
  component: Cta,
} as ComponentMeta<typeof Cta>;

const Template: Story<CtaProps> = (args) => <Cta {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
