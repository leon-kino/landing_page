import { ComponentMeta, Story } from '@storybook/react';
import Image from 'next/image';
import { Icon } from './Icon';

export default {
  title: 'atom/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: Story = (args) => <Icon {...args} />;

export const Arrow = Template.bind({});
Arrow.args = {
  children: <Image src={'/img/Arrow.png'} alt={'/img/Arrow'} width={50} height={50} />,
};

export const Checked = Template.bind({});
Checked.args = {
  children: <Image src={'/img/Checked.png'} alt={'/img/Checked'} width={50} height={50} />,
};

export const FaceBook = Template.bind({});
FaceBook.args = {
  children: <Image src={'/img/FaceBook.png'} alt={'/img/FaceBook'} width={40} height={40} />,
};
export const Hatebu = Template.bind({});
Hatebu.args = {
  children: <Image src={'/img/Hatebu.png'} alt={'/img/Hatebu'} width={39} height={54} />,
};
export const Line = Template.bind({});
Line.args = {
  children: <Image src={'/img/Line.png'} alt={'/img/Line'} width={40} height={40} />,
};
export const NotCheck = Template.bind({});
NotCheck.args = {
  children: <Image src={'/img/NotCheck.png'} alt={'/img/NotCheck'} width={50} height={50} />,
};
export const Pinterest = Template.bind({});
Pinterest.args = {
  children: <Image src={'/img/Pinterest.png'} alt={'/img/Pinterest'} width={40} height={40} />,
};
export const Twitter = Template.bind({});
Twitter.args = {
  children: <Image src={'/img/Twitter.png'} alt={'/img/Twitter'} width={40} height={40} />,
};
