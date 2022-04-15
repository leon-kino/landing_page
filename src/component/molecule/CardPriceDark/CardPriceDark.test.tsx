import { render, screen } from '@testing-library/react';
import { CardPriceDark } from './CardPriceDark';
import { propObj } from './CardPriceDark.props';
import { CardPriceDarkProps } from './CardPriceDark.type';

let props: CardPriceDarkProps;

describe('component/molecule/CardPriceDark', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it('Dark-titleが表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-title')).toHaveTextContent(props.title);
    });
    it('Dark-descriptionが表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-description')).toHaveTextContent(props.description);
    });
    it('Dark-content1が表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-content1')).toHaveTextContent(props.content1);
    });
    it('Dark-check1がtrueの場合、checkされていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-img-content1')).toHaveAttribute('alt', '/img/Checked.png');
    });
    it('Dark-check1がfalseの場合、checkされていないこと', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-img-content1')).toHaveAttribute('alt', '/img/Checked.png');
    });
    it('Dark-content2が表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-content2')).toHaveTextContent(props.content2);
    });
    it('Dark-check2がtrueの場合、checkされていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-img-content2')).toHaveAttribute('alt', '/img/Checked.png');
    });
    it('Dark-content3が表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-content3')).toHaveTextContent(props.content3);
    });
    it('Dark-check3がtrueの場合、checkされていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-img-content3')).toHaveAttribute('alt', '/img/Checked.png');
    });
    it('Dark-content4が表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-content4')).toHaveTextContent(props.content4);
    });
    it('Dark-check4がtrueの場合、checkされていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-img-content4')).toHaveAttribute('alt', '/img/Checked.png');
    });
    it('Dark-content5が表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-content5')).toHaveTextContent(props.content5);
    });
    it('Dark-check5がtrueの場合、checkされていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-img-content5')).toHaveAttribute('alt', '/img/Checked.png');
    });
    it('Dark-content6が表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-content6')).toHaveTextContent(props.content6);
    });
    it('Dark-check6がtrueの場合、checkされていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-img-content6')).toHaveAttribute('alt', '/img/Checked.png');
    });
  });
  describe('false', () => {
    beforeEach(() => {
      props = propObj.false;
    });

    it('Dark-titleが表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-title')).toHaveTextContent(props.title);
    });
    it('Dark-descriptionが表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-description')).toHaveTextContent(props.description);
    });
    it('Dark-content1が表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-content1')).toHaveTextContent(props.content1);
    });
    it('Dark-check1がtrueの場合、checkされていないこと', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-img-content1')).toHaveAttribute('alt', '/img/NotCheck.png');
    });
    it('Dark-content2が表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-content2')).toHaveTextContent(props.content2);
    });
    it('Dark-check2がtrueの場合、checkされていないこと', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-img-content2')).toHaveAttribute('alt', '/img/NotCheck.png');
    });
    it('Dark-content3が表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-content3')).toHaveTextContent(props.content3);
    });
    it('Dark-check3がtrueの場合、checkされていないこと', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-img-content3')).toHaveAttribute('alt', '/img/NotCheck.png');
    });
    it('Dark-content4が表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-content4')).toHaveTextContent(props.content4);
    });
    it('Dark-check4がtrueの場合、checkされていないこと', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-img-content4')).toHaveAttribute('alt', '/img/NotCheck.png');
    });
    it('Dark-content5が表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-content5')).toHaveTextContent(props.content5);
    });
    it('Dark-check5がtrueの場合、checkされていないこと', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-img-content5')).toHaveAttribute('alt', '/img/NotCheck.png');
    });
    it('Dark-content6が表示されていること', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-content6')).toHaveTextContent(props.content6);
    });
    it('Dark-check6がtrueの場合、checkされていないこと', () => {
      render(<CardPriceDark {...props} />);
      expect(screen.getByTestId('Dark-img-content6')).toHaveAttribute('alt', '/img/NotCheck.png');
    });
  });
});
