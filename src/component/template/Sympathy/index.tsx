import { Sympathy as SympathyPresenter } from './Sympathy';
import { SympathyProps } from './Sympathy.type';

const Sympathy: React.FC = () => {
  const defaultProps: SympathyProps = {};
  return <SympathyPresenter {...defaultProps} />;
};

export { Sympathy };
