import { HeroProps } from './Hero.type';

const defaultProps: HeroProps = {
  title: 'title',
  content: 'content',
  button: { text: 'button', link: '.' },
};

export const propObj: { [key: string]: HeroProps } = {
  default: defaultProps,
};
