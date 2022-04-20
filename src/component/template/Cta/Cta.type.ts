import { ImageProps } from 'next/image';

export interface CtaProps {
  title: string;
  image: ImageProps;
  button: { text: string; link: string };
}
