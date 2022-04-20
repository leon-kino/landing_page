import { SympathyProps } from './Sympathy.type';
import Check from '/img/Checked.png';
import Sympathy from '/img/Sympathy.png';

const defaultProps: SympathyProps = {
  title: 'title',
  check: { src: Check, alt: 'check', width: 36, height: 36 },
  content: ['content1', 'content2', 'content3'],
  card: [
    {
      tag: 'tag1',
      title1: 'cardTitle1',
      title2: 'cardTitle2',
      src: Sympathy,
      content: 'content1',
    },
    {
      tag: 'tag2',
      title1: 'cardTitle1',
      title2: 'cardTitle2',
      src: Sympathy,
      content: 'content2',
    },
  ],
};

export const propObj: { [key: string]: SympathyProps } = {
  default: defaultProps,
};
