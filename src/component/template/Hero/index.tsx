import { Hero as HeroPresenter } from './Hero';
import { HeroProps } from './Hero.type';

const Hero: React.FC = () => {
  const defaultProps: HeroProps = {
    title: 'title',
    content: 'content',
    button: { text: 'button', link: '.' },
  };
  return <HeroPresenter {...defaultProps} />;
};

export { Hero };
