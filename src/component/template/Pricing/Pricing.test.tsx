import { render, screen } from '@testing-library/react';
import { Pricing } from './Pricing';
import { propObj } from './Pricing.props';
import { PricingProps } from './Pricing.type';

let props: PricingProps;

describe('component/template/Pricing', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });
    it('titleが表示されていること', () => {
      render(<Pricing {...props} />);
      expect(screen.getByTestId('t-p-title')).toBeInTheDocument();
    });

    it('titleのテキストが正しいこと', () => {
      render(<Pricing {...props} />);
      expect(screen.getByTestId('t-p-title')).toHaveTextContent(props.title);
    });
    it('subtitleが表示されていること', () => {
      render(<Pricing {...props} />);
      expect(screen.getByTestId('t-p-subtitle')).toBeInTheDocument();
    });
    it('subtitleのテキストが正しいこと', () => {
      render(<Pricing {...props} />);
      expect(screen.getByTestId('t-p-subtitle')).toHaveTextContent(props.subtitle);
    });
    it('contentが表示されていること', () => {
      render(<Pricing {...props} />);
      expect(screen.getByTestId('t-p-content')).toBeInTheDocument();
    });
    it('contentのテキストが正しいこと', () => {
      render(<Pricing {...props} />);
      expect(screen.getByTestId('t-p-content')).toHaveTextContent(props.content);
    });
  });
});
