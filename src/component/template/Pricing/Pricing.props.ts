import { PricingProps } from './Pricing.type';

const defaultProps: PricingProps = {
  title: 'title',
  subtitle: 'subtitle',
  card: [
    {
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
    },
    {
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
    },
    {
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
    },
  ],
  content: ['content', 'content', 'content'],
};

export const propObj: { [key: string]: PricingProps } = {
  default: defaultProps,
};
