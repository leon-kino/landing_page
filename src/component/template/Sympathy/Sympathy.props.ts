import { SympathyProps } from './Sympathy.type';
import Check from '~/img/Checked.png';

const defaultProps: SympathyProps = {
  title: 'title',
  check: { src: Check, alt: 'check', width: 36, height: 36 },
  content: ['content1', 'content2', 'content3'],
  card: [
    {
      tag: 'tag1',
      title1: 'cardTitle1',
      title2: 'cardTitle2',
      src: '~/img/Sympathy.png',
      content: 'content1',
    },
    {
      tag: 'tag2',
      title1: 'cardTitle1',
      title2: 'cardTitle2',
      src: '~/img/Sympathy.png',
      content: 'content2',
    },
  ],
};

export const propObj: { [key: string]: SympathyProps } = {
  default: defaultProps,
};
