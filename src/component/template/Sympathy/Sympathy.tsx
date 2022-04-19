/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { SympathyProps } from './Sympathy.type';

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
        <div key={index} className='h-[614px] w-[500px] shadow-md shadow-primary-200'>
          <p className='tag w-max' data-testId={`t-s-card-${index}-tag`}>
            {card.tag}
          </p>
          <h1
            className='primary-lg highlight center my-[30px]'
            data-testId={`t-s-card-${index}-title`}
          >
            {card.title}
          </h1>
          <div className='center'>
            <Image {...card.image} data-testId={`t-s-card-${index}-image`} />
          </div>
          <p className='primary-base center mt-[30px]' data-testId={`t-s-card-${index}-content`}>
            {card.content}
          </p>
        </div>
      ))}
    </div>
  </div>
);
