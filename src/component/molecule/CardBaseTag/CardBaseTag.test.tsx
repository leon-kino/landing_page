import { render, screen } from '@testing-library/react';
import { CardBaseTag } from './CardBaseTag';
import { propObj } from './CardBaseTag.props';
import { CardBaseTagProps } from './CardBaseTag.type';

let props: CardBaseTagProps;

describe('component/molecule/CardBaseTag', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });
    it('tag-tagが表示されること', () => {
      render(<CardBaseTag {...props} />);
      expect(screen.getByTestId('tag-tag')).toHaveTextContent(props.tag);
    });
    it('tag-tagはAtomのtagであること', () => {
      render(<CardBaseTag {...props} />);
      expect(screen.getByTestId('tag-tag')).toHaveClass('tag');
    });
    it('tag-title1が表示されること', () => {
      render(<CardBaseTag {...props} />);
      expect(screen.getByTestId('tag-title1')).toHaveTextContent(props.title1);
    });
    it('tag-title2が表示されること', () => {
      render(<CardBaseTag {...props} />);
      expect(screen.getByTestId('tag-title2')).toHaveTextContent(props.title2);
    });
    it('tag-title1の文字はハイライトであること', () => {
      render(<CardBaseTag {...props} />);
      expect(screen.getByTestId('tag-title1')).toHaveClass('highlight');
    });
    it('tag-title2の文字はハイライトであること', () => {
      render(<CardBaseTag {...props} />);
      expect(screen.getByTestId('tag-title2')).toHaveClass('highlight');
    });
    it('tag-srcがsrcを使って画像を表示していること', () => {
      render(<CardBaseTag {...props} />);
      expect(screen.getByTestId('tag-src')).toHaveAttribute('alt', props.src);
    });
    it('tag-contentが表示されること', () => {
      render(<CardBaseTag {...props} />);
      expect(screen.getByTestId('tag-content')).toHaveTextContent(props.content);
    });
  });
});
