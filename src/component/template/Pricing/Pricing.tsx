import Image from 'next/image';
import { PricingProps } from './Pricing.type';
import { CardPriceDark } from '@/component/molecule/CardPriceDark';
import { CardPriceWhite } from '@/component/molecule/CardPriceWhite';

export const baseId = 'template-pricing';

export const Pricing: React.FC<PricingProps> = ({ title, subtitle, card, content }) => (
  <div id='Pricing' className=' bg-primary-50 '>
    <div className='mx-auto w-[540px] pt-[100px]'>
      <h1 className='primary-2xl center' data-testId='t-p-title'>
        {title}
      </h1>
      <h2 className='primary-lg center mt-[18px]' data-testId='t-p-subtitle'>
        {subtitle}
      </h2>
    </div>
    <div className='mx-auto my-[50px] w-[1299px]'>
      <p className='primary-lg center'>\おすすめ/</p>
      <div className='flex justify-between'>
        <CardPriceWhite {...card[0]} />
        <CardPriceDark {...card[1]} />
        <CardPriceWhite {...card[2]} />
      </div>
    </div>
    <div className='center pb-[100px]'>
      {content.map((content, index) => (
        <div key={index} className='flex items-center'>
          <Image src={'/img/Checked.png'} alt={'/img/Checked.png'} width={32} height={29} />
          <p className='primary-lg py-[6px] pl-[10px] ' data-testId={`t-p-content-${index}`}>
            {content}
          </p>
        </div>
      ))}
    </div>
  </div>
);
