import { ImageProps } from 'next/image';

export interface SympathyProps {
  title: string;
  check: ImageProps;
  content: string[];
  card: { tag: string; title1: string; title2: string; src: string; content: string }[];
}
