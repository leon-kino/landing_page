import { CtaProps } from './Cta.type';

const defaultProps: CtaProps = {
  image: {
    src: '/img/CTA.png',
    alt: 'CTA image',
    width: 600,
    height: 600,
  },
  button: { text: 'text', link: '.' },
};

export const propObj: { [key: string]: CtaProps } = {
  default: defaultProps,
};
