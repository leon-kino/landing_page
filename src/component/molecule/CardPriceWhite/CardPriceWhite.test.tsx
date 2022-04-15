import { render, screen } from '@testing-library/react';
import { CardPriceWhite } from './CardPriceWhite';
import { propObj } from './CardPriceWhite.props';
import { CardPriceWhiteProps } from './CardPriceWhite.type';

let props: CardPriceWhiteProps;

describe('component/molecule/CardPriceWhite', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it('white-titleが表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-title')).toHaveTextContent(props.title);
    });
    it('white-descriptionが表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-description')).toHaveTextContent(props.description);
    });
    it('white-content1が表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-content1')).toHaveTextContent(props.content1);
    });
    it('white-check1がtrueの場合、checkされていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-img-content1')).toHaveAttribute('alt', '/img/Checked.png');
    });
    it('white-check1がfalseの場合、checkされていないこと', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-img-content1')).toHaveAttribute('alt', '/img/Checked.png');
    });
    it('white-content2が表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-content2')).toHaveTextContent(props.content2);
    });
    it('white-check2がtrueの場合、checkされていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-img-content2')).toHaveAttribute('alt', '/img/Checked.png');
    });
    it('white-content3が表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-content3')).toHaveTextContent(props.content3);
    });
    it('white-check3がtrueの場合、checkされていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-img-content3')).toHaveAttribute('alt', '/img/Checked.png');
    });
    it('white-content4が表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-content4')).toHaveTextContent(props.content4);
    });
    it('white-check4がtrueの場合、checkされていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-img-content4')).toHaveAttribute('alt', '/img/Checked.png');
    });
    it('white-content5が表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-content5')).toHaveTextContent(props.content5);
    });
    it('white-check5がtrueの場合、checkされていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-img-content5')).toHaveAttribute('alt', '/img/Checked.png');
    });
    it('white-content6が表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-content6')).toHaveTextContent(props.content6);
    });
    it('white-check6がtrueの場合、checkされていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-img-content6')).toHaveAttribute('alt', '/img/Checked.png');
    });
  });
  describe('false', () => {
    beforeEach(() => {
      props = propObj.false;
    });

    it('white-titleが表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-title')).toHaveTextContent(props.title);
    });
    it('white-descriptionが表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-description')).toHaveTextContent(props.description);
    });
    it('white-content1が表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-content1')).toHaveTextContent(props.content1);
    });
    it('white-check1がtrueの場合、checkされていないこと', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-img-content1')).toHaveAttribute('alt', '/img/NotCheck.png');
    });
    it('white-content2が表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-content2')).toHaveTextContent(props.content2);
    });
    it('white-check2がtrueの場合、checkされていないこと', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-img-content2')).toHaveAttribute('alt', '/img/NotCheck.png');
    });
    it('white-content3が表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-content3')).toHaveTextContent(props.content3);
    });
    it('white-check3がtrueの場合、checkされていないこと', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-img-content3')).toHaveAttribute('alt', '/img/NotCheck.png');
    });
    it('white-content4が表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-content4')).toHaveTextContent(props.content4);
    });
    it('white-check4がtrueの場合、checkされていないこと', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-img-content4')).toHaveAttribute('alt', '/img/NotCheck.png');
    });
    it('white-content5が表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-content5')).toHaveTextContent(props.content5);
    });
    it('white-check5がtrueの場合、checkされていないこと', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-img-content5')).toHaveAttribute('alt', '/img/NotCheck.png');
    });
    it('white-content6が表示されていること', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-content6')).toHaveTextContent(props.content6);
    });
    it('white-check6がtrueの場合、checkされていないこと', () => {
      render(<CardPriceWhite {...props} />);
      expect(screen.getByTestId('white-img-content6')).toHaveAttribute('alt', '/img/NotCheck.png');
    });
  });
});
