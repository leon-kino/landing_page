import { CtaProps } from './Cta.type';
import CTA from '~/img/CTA.png';

const defaultProps: CtaProps = {
  title: 'title',
  image: {
    src: CTA,
    alt: 'CTA image',
    width: 600,
    height: 600,
  },
  button: { text: 'text', link: '.' },
};

export const propObj: { [key: string]: CtaProps } = {
  default: defaultProps,
};
