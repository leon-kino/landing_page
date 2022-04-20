import { Benefit as BenefitPresenter } from './Benefit';
import { BenefitProps } from './Benefit.type';

const Benefit: React.FC = () => {
  const defaultProps: BenefitProps = {};
  return <BenefitPresenter {...defaultProps} />;
};

export { Benefit };
