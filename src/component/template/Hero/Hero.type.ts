import { ImageProps } from 'next/image';

export interface HeroProps {
  title: string;
  content: string;
  button: { text: string; link: string };
}
