import { render, screen } from '@testing-library/react';
import { Cta } from './Cta';
import { propObj } from './Cta.props';
import { CtaProps } from './Cta.type';

let props: CtaProps;

describe('component/template/Cta', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });
    it('imageが表示されていること', () => {
      render(<Cta {...props} />);
      expect(screen.getByTestId('t-cta-image')).toBeInTheDocument();
    });
    it('buttonが表示されていること', () => {
      render(<Cta {...props} />);
      expect(screen.getByTestId('t-cta-button')).toBeInTheDocument();
    });
    it('buttonのテキストが正しいこと', () => {
      render(<Cta {...props} />);
      expect(screen.getByTestId('t-cta-button')).toHaveTextContent(props.button.text);
    });
    it('buttonのリンクが正しいこと', () => {
      render(<Cta {...props} />);
      expect(screen.getByTestId('t-cta-button-link')).toHaveAttribute('href', props.button.link);
    });
  });
});
