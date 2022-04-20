import { render, screen } from '@testing-library/react';
import { PageHeader } from './PageHeader';
import { propObj } from './PageHeader.props';
import { PageHeaderProps } from './PageHeader.type';

let props: PageHeaderProps;

describe('component/template/PageHeader', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it('logoが表示されていること', () => {
      render(<PageHeader {...props} />);
      expect(screen.getByTestId('t-c-ph-logo')).toBeInTheDocument();
    });
    it('logoのリンクが正しいこと', () => {
      render(<PageHeader {...props} />);
      expect(screen.getByTestId('t-c-ph-logo-link')).toHaveAttribute('href', props.logo.link);
    });
    propObj.default.navList.forEach((nav, index) => {
      it(`ナビゲーション ${index} のテキストが表示されていること`, () => {
        render(<PageHeader {...props} />);
        expect(screen.getByTestId(`t-c-ph-nav-${index}`)).toHaveTextContent(nav.text);
      });
      it(`ナビゲーション ${index} のリンクが正しいこと`, () => {
        render(<PageHeader {...props} />);
        expect(screen.getByTestId(`t-c-ph-nav-${index}-link`)).toHaveAttribute('href', nav.link);
      });
    });

    it('buttonのテキストが表示されていること', () => {
      render(<PageHeader {...props} />);
      expect(screen.getByTestId(`t-c-ph-button`)).toHaveTextContent(props.button.text);
    });
    it('buttonのリンクが正しいこと', () => {
      render(<PageHeader {...props} />);
      expect(screen.getByTestId(`t-c-ph-button-link`)).toHaveAttribute('href', props.button.link);
    });
  });
});
