import { PageFooter as PageFooterPresenter } from './PageFooter';
import { PageFooterProps } from './PageFooter.type';

const PageFooter: React.FC = () => {
  const defaultProps: PageFooterProps = {
    logo: {
      src: '/img/Logo.png',
      alt: 'fwywd logo',
      width: 156,
      height: 60,
    },
    catchphrase: '良き仲間との出会いは人生最大の財産である',
    iconList: [
      {
        sns: 'Facebook',
        image: {
          src: '/img/Facebook.png',
          alt: 'FaceBook',
          width: 40,
          height: 40,
        },
        link: '/',
      },
      {
        sns: 'Twitter',
        image: {
          src: '/img/Twitter.png',
          alt: 'Twitter',
          width: 40,
          height: 40,
        },
        link: '/',
      },
      {
        sns: 'Line',
        image: {
          src: '/img/Line.png',
          alt: 'Line',
          width: 40,
          height: 40,
        },
        link: '/',
      },
      {
        sns: 'Hatebu',
        image: {
          src: '/img/Hatebu.png',
          alt: 'Hatebu',
          width: 39,
          height: 54,
        },
        link: '/',
      },
      {
        sns: 'Pinterest',
        image: {
          src: '/img/Pinterest.png',
          alt: 'Pinterest',
          width: 40,
          height: 40,
        },
        link: '/',
      },
    ],
    aboutList: [
      { text: '悩み', link: '#Sympathy' },
      { text: '解決策', link: '#Benefit' },
      { text: '料金', link: '#Pricing' },
    ],
    legalList: [
      { text: '利用規約', link: '.' },
      { text: 'プライバシーポリシー', link: '.' },
      { text: '特記法表記', link: '.' },
      { text: '運営会社', link: '.' },
    ],
    linksList: [
      { text: 'メディアキット', link: '.' },
      { text: 'サイトマップ', link: '.' },
    ],
    copylight: '© 2022, KIKAGAKU, Inc., All right reserved.',
  };
  return <PageFooterPresenter {...defaultProps} />;
};

export { PageFooter };
