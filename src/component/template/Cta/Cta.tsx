/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { CtaProps } from './Cta.type';

export const baseId = 'template-cta';

export const Cta: React.FC<CtaProps> = ({ title, image, button }) => (
  <div className='flex h-[676px] w-[1440px] items-center justify-center bg-gradient-to-r from-primary-800 to-primary-500'>
    <div className='h-[361px] w-[576px]'>
      <h1 className='white-xl' data-testId='t-cta-title'>
        {title}
      </h1>
      <a href={button.link} data-testId='t-cta-button-link'>
        <button className='button-orange-default mt-[75px]' data-testId='t-cta-button'>
          {button.text}
        </button>
      </a>
    </div>
    <Image {...image} data-testId='t-cta-image' />
  </div>
);
