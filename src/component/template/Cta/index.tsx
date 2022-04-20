import { Cta as CtaPresenter } from './Cta';
import { CtaProps } from './Cta.type';

const GF =
  'https://docs.google.com/forms/d/e/1FAIpQLSdiNPV_fNAODFyldaFWFTupyQAnTm9eaSTiJlXa8fF9beJIBg/viewform?usp=sf_link';
const Cta: React.FC = () => {
  const defaultProps: CtaProps = {
    image: {
      src: '/img/CTA.png',
      alt: 'CTA image',
      width: 600,
      height: 600,
    },
    button: { text: '資料ダウンロード', link: GF },
  };
  return <CtaPresenter {...defaultProps} />;
};

export { Cta };
