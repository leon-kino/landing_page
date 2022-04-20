import { render } from '@testing-library/react';
import { Pages, PagesProps, defaultProps, baseId } from '@/pages/pages';

describe('pages/Pages', () => {
  describe('default', () => {

    it('pages/Pages のテストケースを書くこと', () => {
      const view = render(<Pages {...defaultProps} />);
      expect(true).toBe(true);
    });
  });
});