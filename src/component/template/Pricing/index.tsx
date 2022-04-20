import { Pricing as PricingPresenter } from './Pricing';
import { PricingProps } from './Pricing.type';

const Pricing: React.FC = () => {
  const defaultProps: PricingProps = {
    title: '料金',
    subtitle: '\\学びのスタイルに合わせた３つのプランを用意/',
    card: [
      {
        title: '起業挑戦',
        description: 'これから起業する人を\n全力で支援するプラン',
        price: 3000,
        membership: 0,
        tax: 1.1,
        tool: 3000,
        content1: '仲間と学び',
        check1: true,
        content2: 'コース課題と回答集',
        check2: true,
        content3: 'イベント参加',
        check3: true,
        content4: '運営側の質問対応',
        check4: false,
        content5: '入学試験',
        check5: true,
        content6: 'Web 面接',
        check6: true,
      },
      {
        title: 'スタンダード',
        description: '仕事と学びを両立したい人に\nおすすめのプラン',
        price: 13000,
        membership: 10000,
        tax: 1.1,
        tool: 3000,
        content1: '仲間と学び',
        check1: true,
        content2: 'コース課題と回答集',
        check2: true,
        content3: 'イベント参加',
        check3: true,
        content4: '運営側の質問対応',
        check4: false,
        content5: '入学試験',
        check5: true,
        content6: 'Web 面接',
        check6: false,
      },
      {
        title: 'フルサポート',
        description: '標準プランに加えて運営側からの\nフォロー希望の方向け',
        price: 63000,
        membership: 60000,
        tax: 1.1,
        tool: 3000,
        content1: '仲間と学び',
        check1: true,
        content2: 'コース課題と回答集',
        check2: true,
        content3: 'イベント参加',
        check3: true,
        content4: '運営側の質問対応',
        check4: true,
        content5: '入学試験',
        check5: true,
        content6: 'Web 面接',
        check6: false,
      },
    ],
    content: [
      '基本的には同じプランの方とチームになりますが、集まっている人数によって変動します',
      '起業挑戦プランはWeb 面接にてビジネスプランのプレゼンテーションで審査いたします。',
      '起業挑戦プランの方が初年度移行を継続希望の場合は月額 10,000 円の標準プランへと自動的に移行します',
    ],
  };
  return <PricingPresenter {...defaultProps} />;
};

export { Pricing };
