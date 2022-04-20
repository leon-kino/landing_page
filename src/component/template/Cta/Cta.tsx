/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { CtaProps } from './Cta.type';

export const baseId = 'template-cta';

export const Cta: React.FC<CtaProps> = ({ image, button }) => (
  <div className='bg-gradient-to-r from-primary-800 to-primary-500'>
    <div className='mx-auto flex  h-[676px] w-10/12 items-center justify-between'>
      <div className='h-[361px] w-[576px]'>
        <span className='text text-[3.7rem] font-bold text-white'>良き仲間</span>
        <span className='text text-[3rem] text-white'>との出会いは</span>
        <br />
        <span className='text text-[3.7rem] font-bold text-white'>人生最大</span>
        <span className='text text-[3rem] text-white'>の</span>
        <span className='text text-[3.7rem] font-bold text-white'>財産</span>
        <span className='text text-[3rem] text-white'>である</span>
        <a href={button.link} data-testId='t-cta-button-link'>
          <button className='button-orange-default mt-[75px]' data-testId='t-cta-button'>
            {button.text}
          </button>
        </a>
      </div>
      <Image {...image} data-testId='t-cta-image' />
    </div>
  </div>
);
