import { render, screen } from '@testing-library/react';
import { PageFooter } from './PageFooter';
import { propObj } from './PageFooter.props';
import { PageFooterProps } from './PageFooter.type';

let props: PageFooterProps;

describe('component/template/PageFooter', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it('logoが表示されていること', () => {
      render(<PageFooter {...props} />);
      expect(screen.getByTestId('t-c-pf-logo')).toBeInTheDocument();
    });

    it('cathphraseの文字が正しいこと', () => {
      render(<PageFooter {...props} />);
      expect(screen.getByTestId('t-c-pf-cathphrase')).toHaveTextContent(props.catchphrase);
    });
    //forEach
    {
      propObj.default.iconList.forEach((icon) => {
        it('iconが表示されていること', () => {
          render(<PageFooter {...props} />);
          expect(screen.getByTestId(`t-c-pf-${icon.sns}`)).toBeInTheDocument();
        });

        it('iconのlinkが正しいこと', () => {
          render(<PageFooter {...props} />);
          expect(screen.getByTestId(`t-c-pf-${icon.sns}-link`)).toHaveAttribute('href', icon.link);
        });
      });
    }
    //end
    //forEach
    propObj.default.aboutList.forEach((about, index) => {
      it('aboutの文字が正しいこと', () => {
        render(<PageFooter {...props} />);
        expect(screen.getByTestId(`t-c-pf-about-${index}`)).toHaveTextContent(about.text);
      });
      it('aboutのlinkが正しいこと', () => {
        render(<PageFooter {...props} />);
        expect(screen.getByTestId(`t-c-pf-about-${index}-link`)).toHaveAttribute(
          'href',
          about.link,
        );
      });
    });
    //end
    //forEach
    propObj.default.legalList.forEach((legal, index) => {
      it('legalの文字が正しいこと', () => {
        render(<PageFooter {...props} />);
        expect(screen.getByTestId(`t-c-pf-legal-${index}`)).toHaveTextContent(legal.text);
      });
      it('legalのlinkが正しいこと', () => {
        render(<PageFooter {...props} />);
        expect(screen.getByTestId(`t-c-pf-legal-${index}-link`)).toHaveAttribute(
          'href',
          legal.link,
        );
      });
    });
    //end
    //forEach
    propObj.default.linksList.forEach((links, index) => {
      it('linksの文字が正しいこと', () => {
        render(<PageFooter {...props} />);
        expect(screen.getByTestId(`t-c-pf-links-${index}`)).toHaveTextContent(links.text);
      });
      it('linksのlinkが正しいこと', () => {
        render(<PageFooter {...props} />);
        expect(screen.getByTestId(`t-c-pf-links-${index}-link`)).toHaveAttribute(
          'href',
          links.link,
        );
      });
    });
    //end
    it('copylightの文字が正しいこと', () => {
      render(<PageFooter {...props} />);
      expect(screen.getByTestId(`t-c-pf-copylight`)).toHaveTextContent(props.copylight);
    });
  });
});
