import { SympathyProps } from './Sympathy.type';
import Check from '~/img/Checked.png';
import Sympathy from '~/img/Sympathy1.png';

const defaultProps: SympathyProps = {
  title: 'title',
  check: { src: Check, alt: 'check', width: 36, height: 36 },
  content: ['content1', 'content2', 'content3'],
  card: [
    {
      tag: 'tag1',
      title: 'cardTitle1',
      image: { src: Sympathy, alt: 'Sympathy1', width: 315, height: 315 },
      content: 'content1',
    },
    {
      tag: 'tag2',
      title: 'cardTitle2',
      image: { src: Sympathy, alt: 'Sympathy1', width: 315, height: 315 },
      content: 'content2',
    },
  ],
};

export const propObj: { [key: string]: SympathyProps } = {
  default: defaultProps,
};
