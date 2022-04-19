import { ImageProps } from 'next/image';

export interface SympathyProps {
  title: string;
  check: ImageProps;
  content: string[];
  card: { tag: string; title: string; image: ImageProps; content: string }[];
}
