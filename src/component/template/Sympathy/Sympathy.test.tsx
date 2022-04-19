import { render, screen } from '@testing-library/react';
import { Sympathy } from './Sympathy';
import { propObj } from './Sympathy.props';
import { SympathyProps } from './Sympathy.type';

let props: SympathyProps;

describe('component/template/Sympathy', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });
    it('titleが表示されていること', () => {
      render(<Sympathy {...props} />);
      expect(screen.getByTestId('t-s-title')).toBeInTheDocument();
    });
    it('titleの文字が正しいこと', () => {
      render(<Sympathy {...props} />);
      expect(screen.getByTestId('t-s-title')).toHaveTextContent(props.title);
    });
    //for
    propObj.default.content.forEach((content, index) => {
      it(`content${index}の文字が正しいこと`, () => {
        render(<Sympathy {...props} />);
        expect(screen.getByTestId(`t-s-content-${index}`)).toBeInTheDocument();
      });
      it(`content${index}が表示されていること`, () => {
        render(<Sympathy {...props} />);
        expect(screen.getByTestId(`t-s-content-${index}`)).toHaveTextContent(content);
      });
    });
    //endfor
  });
});
