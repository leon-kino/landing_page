import { BenefitProps } from './Benefit.type';
import { CardBaseColor } from '@/component/molecule/CardBaseColor';

export const baseId = 'template-benefit';

export const Benefit: React.FC<BenefitProps> = ({ title, subTitle, card, content }) => (
  <div className='h-[1230px] w-[1440px]'>
    <div className='bg-benefit bg-no-repeat'>
      <div className='mx-auto mt-[76px] h-[1091px] w-[1100px]'>
        <h2 className='primary-lg highlight center' data-testId='t-b-title'>
          {title}
        </h2>
        <h1 className='primary-xl center pt-[50px]' data-testId='t-b-subTitle'>
          {subTitle}
        </h1>
        <div className='flex justify-between py-[50px]'>
          {card.map((card, index) => (
            <CardBaseColor {...card} key={index} />
          ))}
        </div>
        <p className='primary-lg center' data-testId='t-b-content'>
          {content}
        </p>
      </div>
    </div>
  </div>
);
