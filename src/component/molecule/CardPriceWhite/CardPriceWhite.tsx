import Image from 'next/image';
import { CardPriceWhiteProps } from './CardPriceWhite.type';
export const baseId = 'molecule-card-price-white';

export const CardPriceWhite: React.FC<CardPriceWhiteProps> = ({
  title,
  description,
  price,
  membership,
  tax,
  tool,
  content1,
  check1,
  content2,
  check2,
  content3,
  check3,
  content4,
  check4,
  content5,
  check5,
  content6,
  check6,
}) => (
  <div className='w-[410px] bg-white py-[50px] shadow-md shadow-primary-200'>
    <div className='flex items-center justify-center'>
      <p className='primary-2xl' data-testId={'white-title'}>
        {title}
      </p>
      <p className='primary-lg'>プラン</p>
    </div>
    <h2
      className='primary-lg center text m-auto py-[12px] text-center'
      data-testId={'white-description'}
    >
      {description}
    </h2>
    <h2 className='primary-lg center flex items-end leading-none'>
      月額 <p className='primary-xl items-end px-2 leading-none'>{price.toLocaleString()}</p>円
      <p className='primary-xs'>（税抜）</p>
    </h2>

    <div className='m-[30px]'>
      <div className='mb-[10px]'>
        <div className='flex justify-between'>
          <p className='primary-lg'>会費 </p>
          <p className='primary-lg'>月額 {membership.toLocaleString()} 円</p>
        </div>
        <h6 className='primary-sm boder text-right'>
          税込 {Math.trunc(membership * tax).toLocaleString()} 円
        </h6>
      </div>
      <div className='mt-[10px]'>
        <div className='flex justify-between'>
          <p className='primary-lg'>ツール代 </p>
          <p className='primary-lg'>月額 {tool.toLocaleString()} 円</p>
        </div>
        <h6 className='primary-sm boder text-right'>
          税込 {Math.trunc(tool * tax).toLocaleString()} 円
        </h6>
      </div>
    </div>
    <hr className='m-auto w-[350px] border border-primary-200' />
    <div className='center py-[30px]'>
      <div className='flex items-center'>{discrimination(check1, content1)}</div>
      <div className='mt-[10px] flex items-center'>{discrimination(check2, content2)}</div>
      <div className='mt-[10px] flex items-center'>{discrimination(check3, content3)}</div>
      <div className='mt-[10px] flex items-center'>{discrimination(check4, content4)}</div>
    </div>
    <hr className='m-auto w-[350px] border border-primary-200' />
    <div className='center py-[30px]'>
      <div className='flex items-center'>{discrimination(check5, content5)}</div>
      <div className='mt-[10px] flex items-center'>{discrimination(check6, content6)}</div>
    </div>
  </div>
);

export const discrimination = (check: boolean, content: string) => {
  if (check) {
    return (
      <>
        <Image
          src={'/img/Checked.png'}
          alt={'/img/Checked.png'}
          width={32}
          height={29}
          data-testId={'white-img-' + content}
        />
        <p className='primary-lg ml-[10px]' data-testId={'white-' + content}>
          {content}
        </p>
      </>
    );
  } else {
    return (
      <>
        <Image
          src={'/img/NotCheck.png'}
          alt={'/img/NotCheck.png'}
          width={32}
          height={29}
          data-testId={'white-img-' + content}
        />
        <p
          className='ml-[10px] text-lg font-bold text-primary-200'
          data-testId={'white-' + content}
        >
          {content}
        </p>
      </>
    );
  }
};
