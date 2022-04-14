import { render, screen } from '@testing-library/react';
import { CardBaseColor } from './CardBaseColor';
import { propObj } from './CardBaseColor.props';
import { CardBaseColorProps } from './CardBaseColor.type';

let props: CardBaseColorProps;

describe('component/molecule/CardBaseColor', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });
    it('color-bgcが適していること', () => {
      render(<CardBaseColor {...props} />);
      expect(screen.getByTestId('color-bgc')).toHaveClass(props.bgc);
    });
    it('color-wantが表示されること', () => {
      render(<CardBaseColor {...props} />);
      expect(screen.getByTestId('color-color')).toHaveTextContent(props.want);
    });
    it('color-arrowSrcがarrowSrcを使って画像を表示していること', () => {
      render(<CardBaseColor {...props} />);
      expect(screen.getByTestId('color-arrowSrc')).toHaveAttribute('alt', props.arrowSrc);
    });
    it('color-titleが表示されること', () => {
      render(<CardBaseColor {...props} />);
      expect(screen.getByTestId('color-title')).toHaveTextContent(props.title);
    });
    it('color-titleの文字はハイライトであること', () => {
      render(<CardBaseColor {...props} />);
      expect(screen.getByTestId('color-title')).toHaveClass('highlight');
    });
    it('color-imgSrcがimgSrcを使って画像を表示していること', () => {
      render(<CardBaseColor {...props} />);
      expect(screen.getByTestId('color-imgSrc')).toHaveAttribute('alt', props.imgSrc);
    });
    it('color-contentが表示されること', () => {
      render(<CardBaseColor {...props} />);
      expect(screen.getByTestId('color-content')).toHaveTextContent(props.content);
    });
  });
});
