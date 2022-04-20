import { Benefit as BenefitPresenter } from './Benefit';
import { BenefitProps } from './Benefit.type';

const Benefit: React.FC = () => {
  const defaultProps: BenefitProps = {
    title: 'あなたが本気で変わるために必要な２つの能力',
    subTitle: '成果 = モチベーション ✕ 能力',
    card: [
      {
        bgc: 'primary-50',
        want: '仲間',
        arrowSrc: '/img/Arrow.png',
        title: 'モチベーション',
        imgSrc: '/img/Benefit1.png',
        content: `熱量の高い\n最高の仲間と切磋琢磨`,
      },
      {
        bgc: 'primary-50',
        want: '目的',
        arrowSrc: '/img/Arrow.png',
        title: '能力',
        imgSrc: '/img/Benefit2.png',
        content: `プロレベルで必要な\n技術ロードマップを網羅`,
      },
    ],
    content: '良き仲間と目的を持った学びができる環境を提供します。\n成果が出る学びがここにあります',
  };
  return <BenefitPresenter {...defaultProps} />;
};

export { Benefit };
