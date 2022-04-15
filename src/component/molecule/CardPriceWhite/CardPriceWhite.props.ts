import { CardPriceWhiteProps } from './CardPriceWhite.type';

const defaultProps: CardPriceWhiteProps = {
  title: 'title',
  description: 'description',
  price: 3000,
  membership: 0,
  tax: 1.1,
  tool: 3000,
  content1: 'content1',
  check1: true,
  content2: 'content2',
  check2: true,
  content3: 'content3',
  check3: true,
  content4: 'content4',
  check4: true,
  content5: 'content5',
  check5: true,
  content6: 'content6',
  check6: true,
};

const falseProps: CardPriceWhiteProps = {
  title: 'title',
  description: 'description',
  price: 3000,
  membership: 0,
  tax: 1.1,
  tool: 3000,
  content1: 'content1',
  check1: false,
  content2: 'content2',
  check2: false,
  content3: 'content3',
  check3: false,
  content4: 'content4',
  check4: false,
  content5: 'content5',
  check5: false,
  content6: 'content6',
  check6: false,
};

export const propObj: { [key: string]: CardPriceWhiteProps } = {
  default: defaultProps,
  false: falseProps,
};
