import { Hero as HeroPresenter } from './Hero';
import { HeroProps } from './Hero.type';

const GF =
  'https://docs.google.com/forms/d/e/1FAIpQLSdiNPV_fNAODFyldaFWFTupyQAnTm9eaSTiJlXa8fF9beJIBg/viewform?usp=sf_link';

const Hero: React.FC = () => {
  const defaultProps: HeroProps = {
    title: `良心ある自己実現が\nできる社会へ`,
    content: '貢献が正しく評価される仕組みを作る',
    button: { text: '資料ダウンロード', link: GF },
  };
  return <HeroPresenter {...defaultProps} />;
};

export { Hero };
