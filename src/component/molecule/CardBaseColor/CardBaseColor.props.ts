import { CardBaseColorProps } from './CardBaseColor.type';

const defaultProps: CardBaseColorProps = {
  bgc: 'primary-50',
  want: 'want',
  arrowSrc: '/img/Arrow.png',
  title: 'title',
  imgSrc: '/img/Benefit1.png',
  content: 'content',
};

export const propObj: { [key: string]: CardBaseColorProps } = {
  default: defaultProps,
};
