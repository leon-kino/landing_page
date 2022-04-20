/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { SympathyProps } from './Sympathy.type';
import { CardBaseTag } from '@/component/molecule/CardBaseTag';

export const baseId = 'template-sympathy';

export const Sympathy: React.FC<SympathyProps> = ({ title, check, content, card }) => (
  <div className='h-[1100px] w-[1440px] bg-primary-50'>
    <h1 className='highlight primary-lg center pt-[100px]' data-testId='t-s-title'>
      {title}
    </h1>
    <div className='py-[50px]'>
      {content.map((content, index) => (
        <div key={index} className='center flex items-center py-[6px]'>
          <Image {...check} />
          <p className='primary-base pl-[10px]' data-testId={`t-s-content-${index}`}>
            {content}
          </p>
        </div>
      ))}
    </div>
    <div className='mx-auto flex h-[614px] w-[1240px] justify-around'>
      {card.map((card, index) => (
        <CardBaseTag {...card} key={index} />
      ))}
    </div>
  </div>
);
