import { render, screen } from '@testing-library/react';
import { Benefit } from './Benefit';
import { propObj } from './Benefit.props';
import { BenefitProps } from './Benefit.type';

let props: BenefitProps;

describe('component/template/Benefit', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it('titleが表示されていること', () => {
      render(<Benefit {...props} />);
      expect(screen.getByTestId('t-b-title')).toBeInTheDocument();
    });
    it('titleの文字が正しいこと', () => {
      render(<Benefit {...props} />);
      expect(screen.getByTestId('t-b-title')).toHaveTextContent(props.title);
    });
    it('subTitleが表示されていること', () => {
      render(<Benefit {...props} />);
      expect(screen.getByTestId('t-b-subTitle')).toBeInTheDocument();
    });
    it('subTitleの文字が正しいこと', () => {
      render(<Benefit {...props} />);
      expect(screen.getByTestId('t-b-subTitle')).toHaveTextContent(props.subTitle);
    });
    it('contentが表示されていること', () => {
      render(<Benefit {...props} />);
      expect(screen.getByTestId('t-b-content')).toBeInTheDocument();
    });
    it('contentの文字が正しいこと', () => {
      render(<Benefit {...props} />);
      expect(screen.getByTestId('t-b-content')).toHaveTextContent(props.content);
    });
  });
});
