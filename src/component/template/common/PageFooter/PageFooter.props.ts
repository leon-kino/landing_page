import { PageFooterProps } from './PageFooter.type';
import FaceBook from '~/img/Facebook.png';
import Hatebu from '~/img/Hatebu.png';
import Line from '~/img/Line.png';
import logo from '~/img/Logo.png';
import Pinterest from '~/img/Pinterest.png';
import Twitter from '~/img/Twitter.png';

const defaultProps: PageFooterProps = {
  logo: {
    src: logo,
    alt: 'fwywd logo',
    width: 156,
    height: 60,
  },
  catchphrase: 'catchphrase',
  iconList: [
    {
      sns: 'Facebook',
      image: {
        src: FaceBook,
        alt: 'FaceBook',
        width: 40,
        height: 40,
      },
      link: '/',
    },
    {
      sns: 'Twitter',
      image: {
        src: Twitter,
        alt: 'Twitter',
        width: 40,
        height: 40,
      },
      link: '/',
    },
    {
      sns: 'Line',
      image: {
        src: Line,
        alt: 'Line',
        width: 40,
        height: 40,
      },
      link: '/',
    },
    {
      sns: 'Hatebu',
      image: {
        src: Hatebu,
        alt: 'Hatebu',
        width: 39,
        height: 54,
      },
      link: '/',
    },
    {
      sns: 'Pinterest',
      image: {
        src: Pinterest,
        alt: 'Pinterest',
        width: 40,
        height: 40,
      },
      link: '/',
    },
  ],
  aboutList: [
    { text: 'about1', link: '#about1' },
    { text: 'about2', link: '#about2' },
    { text: 'about3', link: '#about3' },
  ],
  legalList: [
    { text: 'legal1', link: '#legal1' },
    { text: 'legal2', link: '#legal2' },
    { text: 'legal3', link: '#legal3' },
    { text: 'legal4', link: '#legal4' },
  ],
  linksList: [
    { text: 'links1', link: '#links1' },
    { text: 'links2', link: '#links2' },
  ],
  copylight: 'copylight',
};

export const propObj: { [key: string]: PageFooterProps } = {
  default: defaultProps,
};
