import { PageHeader as PageHeaderPresenter } from './PageHeader';
import { PageHeaderProps } from './PageHeader.type';

const GF =
  'https://docs.google.com/forms/d/e/1FAIpQLSdiNPV_fNAODFyldaFWFTupyQAnTm9eaSTiJlXa8fF9beJIBg/viewform?usp=sf_link';

const PageHeader: React.FC = () => {
  const defaultProps: PageHeaderProps = {
    logo: {
      image: { src: '/img/Logo.png', alt: 'fwywd Logo', width: 156, height: 60 },
      link: '.',
    },
    navList: [
      {
        text: 'TOP',
        link: '.',
      },
      {
        text: '悩み',
        link: '#Sympathy',
      },
      {
        text: '解決策',
        link: '#Benefit',
      },
      {
        text: '料金',
        link: '#Pricing',
      },
    ],
    button: {
      text: '資料ダウンロード',
      link: GF,
    },
  };
  return <PageHeaderPresenter {...defaultProps} />;
};

export { PageHeader };
