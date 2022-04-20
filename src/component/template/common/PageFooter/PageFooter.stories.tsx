import { ComponentMeta, Story } from '@storybook/react';
import { PageFooter } from './PageFooter';
import { propObj } from './PageFooter.props';
import { PageFooterProps } from './PageFooter.type';

export default {
  title: 'template/PageFooter',
  component: PageFooter,
} as ComponentMeta<typeof PageFooter>;

const Template: Story<PageFooterProps> = (args) => <PageFooter {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
