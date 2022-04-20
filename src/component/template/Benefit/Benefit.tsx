import { BenefitProps } from './Benefit.type';
import { CardBaseColor } from '@/component/molecule/CardBaseColor';

export const baseId = 'template-benefit';

export const Benefit: React.FC<BenefitProps> = ({ title, subTitle, card, content }) => (
  <div id='Benefit' className='bg-benefit bg-center bg-no-repeat'>
    <div className='mx-auto mt-[76px] h-[1091px] w-[1100px]'>
      <h2 className='primary-xl highlight center' data-testId='t-b-title'>
        {title}
      </h2>
      <h1 className='primary-2xl center pt-[50px]' data-testId='t-b-subTitle'>
        {subTitle}
      </h1>
      <div className='flex justify-between py-[50px]'>
        {card.map((card, index) => (
          <CardBaseColor {...card} key={index} />
        ))}
      </div>
      <p className='primary-xl center text text-center' data-testId='t-b-content'>
        {content}
      </p>
    </div>
  </div>
);
