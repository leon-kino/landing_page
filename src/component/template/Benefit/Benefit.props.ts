import { BenefitProps } from './Benefit.type';

const defaultProps: BenefitProps = {
  title: 'title1',
  subTitle: 'subTitle1',
  card: [
    {
      bgc: 'primary-50',
      want: 'want',
      arrowSrc: '/img/Arrow.png',
      title: 'title',
      imgSrc: '/img/Benefit1.png',
      content: 'content',
    },
    {
      bgc: 'primary-50',
      want: 'want2',
      arrowSrc: '/img/Arrow.png',
      title: 'title2',
      imgSrc: '/img/Benefit1.png',
      content: 'content2',
    },
  ],
  content: 'content',
};

export const propObj: { [key: string]: BenefitProps } = {
  default: defaultProps,
};
