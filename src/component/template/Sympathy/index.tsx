import { Sympathy as SympathyPresenter } from './Sympathy';
import { SympathyProps } from './Sympathy.type';

const Sympathy: React.FC = () => {
  const defaultProps: SympathyProps = {
    title: '夢を叶える仲間が欲しい、あなたへ',
    check: { src: '/img/Checked.png', alt: 'check', width: 36, height: 36 },
    content: [
      '新しいことを始めたい気持ちは強い',
      '学びに必要な教材がたくさんあることは知っている',
      '最後のひと押しの勇気がほしい',
    ],
    card: [
      {
        tag: '悩み１',
        title1: '仲間',
        title2: 'がいない',
        src: '/img/Sympathy.png',
        content: `会社の同僚や友人と一緒に\n学ぶのは難しい`,
      },
      {
        tag: '悩み２',
        title1: '目的',
        title2: 'があいまい',
        src: '/img/Sympathy2.png',
        content: `ゆるい繋がりのコミュニティでは\n目的が達成できない`,
      },
    ],
  };
  return <SympathyPresenter {...defaultProps} />;
};

export { Sympathy };
