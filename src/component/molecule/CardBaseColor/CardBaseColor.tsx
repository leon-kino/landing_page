import Image from 'next/image';
import { CardBaseColorProps } from './CardBaseColor.type';

export const baseId = 'molecule-card-base-color';

export const CardBaseColor: React.FC<CardBaseColorProps> = ({
  want,
  arrowSrc,
  title,
  imgSrc,
  content,
}) => (
  <div
    className='h-[707px] w-[500px] bg-primary-50 shadow-md shadow-primary-200'
    data-testId='color-bgc'
  >
    <div className='pt-[50px]'>
      <p className='primary-base mx-auto w-max' data-TestId='color-want'>
        {want}
      </p>
      <div className='mx-auto my-[20px] h-max w-max rotate-90'>
        <Image src={arrowSrc} alt={arrowSrc} width={30} height={30} data-testId='color-arrowSrc' />
      </div>
      <h1 className='primary-lg highlight mx-auto w-max leading-none' data-testId='tag-title1'>
        {title}
      </h1>
    </div>

    <div className='mx-auto my-[30px] h-max w-max'>
      <Image src={imgSrc} alt={imgSrc} width={315} height={315} data-testId='tag-src' />
    </div>
    <p className='primary-base mx-auto w-max' data-testId='tag-content'>
      {content}
    </p>
  </div>
);
