import Image from 'next/image';
import { CardBaseTagProps } from './CardBaseTag.type';
export const baseId = 'molecule-card-base-tag';

export const CardBaseTag: React.FC<CardBaseTagProps> = ({ tag, title1, title2, src, content }) => (
  <div className='h-[614px] w-[500px] bg-white'>
    <span className='tag' data-testId='tag-tag'>
      {tag}
    </span>
    <div className=' flex items-end justify-center pt-16'>
      <p className='primary-xl highlight leading-none' data-testId='tag-title1'>
        {title1}
      </p>
      <p className='primary-lg highlight leading-7' data-testId='tag-title2'>
        {title2}
      </p>
    </div>
    <div className='mx-auto my-[30px] h-max w-max'>
      <Image src={src} alt={src} width={315} height={315} data-testId='tag-src' />
    </div>
    <p className='primary-lg mx-auto w-[315px]' data-testId='tag-content'>
      {content}
    </p>
  </div>
);
