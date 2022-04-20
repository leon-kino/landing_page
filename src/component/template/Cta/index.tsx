import { Cta as CtaPresenter } from './Cta';
import { CtaProps } from './Cta.type';

const Cta: React.FC = () => {
  const defaultProps: CtaProps = {};
  return <CtaPresenter {...defaultProps} />;
};

export { Cta };
