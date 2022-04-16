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

    it(`ナビゲーション 0 のテキストが表示されていること`, () => {
      render(<PageHeader {...props} />);
      expect(screen.getByTestId(`t-c-ph-nav-0`)).toHaveTextContent(props.navList[0].text);
    });
    it('ナビゲーション 0 のリンクが正しいこと', () => {
      render(<PageHeader {...props} />);
      expect(screen.getByTestId(`t-c-ph-nav-0-link`)).toHaveAttribute(
        'href',
        props.navList[0].link,
      );
    });
    it(`ナビゲーション 1 のテキストが表示されていること`, () => {
      render(<PageHeader {...props} />);
      expect(screen.getByTestId(`t-c-ph-nav-1`)).toHaveTextContent(props.navList[1].text);
    });
    it('ナビゲーション 1 のリンクが正しいこと', () => {
      render(<PageHeader {...props} />);
      expect(screen.getByTestId(`t-c-ph-nav-1-link`)).toHaveAttribute(
        'href',
        props.navList[1].link,
      );
    });
    it(`ナビゲーション 2 のテキストが表示されていること`, () => {
      render(<PageHeader {...props} />);
      expect(screen.getByTestId(`t-c-ph-nav-2`)).toHaveTextContent(props.navList[2].text);
    });
    it('ナビゲーション 2 のリンクが正しいこと', () => {
      render(<PageHeader {...props} />);
      expect(screen.getByTestId(`t-c-ph-nav-2-link`)).toHaveAttribute(
        'href',
        props.navList[2].link,
      );
    });
    it(`ナビゲーション 3 のテキストが表示されていること`, () => {
      render(<PageHeader {...props} />);
      expect(screen.getByTestId(`t-c-ph-nav-3`)).toHaveTextContent(props.navList[3].text);
    });
    it('ナビゲーション 3 のリンクが正しいこと', () => {
      render(<PageHeader {...props} />);
      expect(screen.getByTestId(`t-c-ph-nav-3-link`)).toHaveAttribute(
        'href',
        props.navList[3].link,
      );
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
