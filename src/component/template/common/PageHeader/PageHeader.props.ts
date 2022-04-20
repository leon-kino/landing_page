import { PageHeaderProps } from './PageHeader.type';
import Logo from '/img/Logo.png';

const defaultProps: PageHeaderProps = {
  logo: {
    image: {
      src: Logo,
      alt: 'fwywdLogo',
      width: 156,
      height: 60,
    },
    link: '/',
  },
  navList: [
    {
      text: 'nav1',
      link: '#nav1',
    },
    {
      text: 'nav2',
      link: '#nav2',
    },
    {
      text: 'nav3',
      link: '#nav3',
    },
    {
      text: 'nav4',
      link: '#nav4',
    },
  ],
  button: {
    text: 'button',
    link: '/',
  },
};

export const propObj: { [key: string]: PageHeaderProps } = {
  default: defaultProps,
};
