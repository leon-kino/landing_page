import { ImageProps } from 'next/image';

export interface PageHeaderProps {
  logo: { image: ImageProps; link: string };
  navList: { text: string; link: string }[];
  button: { text: string; link: string };
}
