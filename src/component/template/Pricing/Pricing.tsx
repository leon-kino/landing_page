import { PricingProps } from './Pricing.type';
import { CardPriceDark } from '@/component/molecule/CardPriceDark';
import { CardPriceWhite } from '@/component/molecule/CardPriceWhite';

export const baseId = 'template-pricing';

export const Pricing: React.FC<PricingProps> = ({ title, subtitle, card, content }) => (
  <div className='w-[1440px] bg-primary-50 '>
    <div className='mx-auto w-[540px] pt-[100px]'>
      <h1 className='primary-xl center' data-testId='t-p-title'>
        {title}
      </h1>
      <h2 className='primary-base center mt-[18px]' data-testId='t-p-subtitle'>
        {subtitle}
      </h2>
    </div>
    <div className='mx-auto my-[50px] w-[1299px]'>
      <p className='primary-base center'>\おすすめ/</p>
      <div className='flex justify-between'>
        <CardPriceWhite {...card[0]} />
        <CardPriceDark {...card[1]} />
        <CardPriceWhite {...card[2]} />
      </div>
    </div>
    <p className='center primary-base pb-[100px]' data-testId='t-p-content'>
      {content}
    </p>
  </div>
);
