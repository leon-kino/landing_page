import { ImageProps } from 'next/image';

export interface PageFooterProps {
  logo: ImageProps;
  catchphrase: string;
  iconList: { sns: string; image: ImageProps; link: string }[];
  aboutList: { text: string; link: string }[];
  legalList: { text: string; link: string }[];
  linksList: { text: string; link: string }[];
  copylight: string;
}
