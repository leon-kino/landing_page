import { Pricing as PricingPresenter } from './Pricing';
import { PricingProps } from './Pricing.type';

const Pricing: React.FC = () => {
  const defaultProps: PricingProps = {};
  return <PricingPresenter {...defaultProps} />;
};

export { Pricing };
