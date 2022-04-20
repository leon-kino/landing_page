import { ImageProps } from 'next/image';

export interface CtaProps {
  image: ImageProps;
  button: { text: string; link: string };
}
