import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import { propObj } from './Hero.props';
import { HeroProps } from './Hero.type';

let props: HeroProps;

describe('component/template/Hero', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });
    it('titleが表示されていること', () => {
      render(<Hero {...props} />);
      expect(screen.getByTestId('t-h-title')).toBeInTheDocument();
    });
    it('titleのテキストが正しいこと', () => {
      render(<Hero {...props} />);
      expect(screen.getByTestId('t-h-title')).toHaveTextContent(props.title);
    });
    it('contentが表示されていること', () => {
      render(<Hero {...props} />);
      expect(screen.getByTestId('t-h-content')).toBeInTheDocument();
    });
    it('contentのテキストが正しいこと', () => {
      render(<Hero {...props} />);
      expect(screen.getByTestId('t-h-content')).toHaveTextContent(props.content);
    });
    it('buttonが表示されていること', () => {
      render(<Hero {...props} />);
      expect(screen.getByTestId('t-h-button')).toBeInTheDocument();
    });
    it('buttonのテキストが正しいこと', () => {
      render(<Hero {...props} />);
      expect(screen.getByTestId('t-h-button')).toHaveTextContent(props.button.text);
    });
    it('buttonのリンクが正しいこと', () => {
      render(<Hero {...props} />);
      expect(screen.getByTestId('t-h-button-link')).toHaveAttribute('href', props.button.link);
    });
  });
});
