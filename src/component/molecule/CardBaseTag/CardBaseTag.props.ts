import { CardBaseTagProps } from './CardBaseTag.type';

const defaultProps: CardBaseTagProps = {
  tag: 'tag1',
  title1: 'title1',
  title2: 'title2',
  src: '/img/Sympathy.png',
  content: 'content',
};

export const propObj: { [key: string]: CardBaseTagProps } = {
  default: defaultProps,
};
