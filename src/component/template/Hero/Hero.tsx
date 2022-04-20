/* eslint-disable @typescript-eslint/no-var-requires */
import useSWR from 'swr';
import { HeroProps } from './Hero.type';
const stein = 'https://api.steinhq.com/v1/storages/625b84a54906bb05373bc8c9/form';
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Profile = () => {
  const { data, error } = useSWR(stein, fetcher);

  if (error)
    return (
      <h2 className='text-orange'>
        ダウンロード人数の
        <br />
        読み込みに失敗しました
      </h2>
    );
  if (!data) return <h2 className='mx-auto text-orange'>\現在___名がダウンロード/</h2>;
  return (
    <div className='flex items-center justify-center'>
      <h2 className='ml-3 mr-1 tracking-widest text-orange'>\現在</h2>
      <h1 className='text-lg text-orange'>{data.length}</h1>
      <h2 className='ml-1 tracking-widest text-orange'>名がダウンロード/</h2>
    </div>
  );
};
export const baseId = 'template-hero';

export const Hero: React.FC<HeroProps> = ({ title, content, button }) => (
  <div className='w-11/12 bg-hero bg-cover bg-no-repeat'>
    <div className='ml-[44px] w-[576px] py-[144px] '>
      <h1 className='text text-[3.7rem] font-bold text-black' data-testId='t-h-title'>
        {title}
      </h1>
      <h2 className='black-xl mt-[30px]' data-testId='t-h-content'>
        {content}
      </h2>
      <div className='mt-[100px] w-max'>
        {Profile()}
        <a href={button.link} data-testId='t-h-button-link'>
          <button
            className='button-orange-default hover:button-orange-hover'
            data-testId='t-h-button'
          >
            {button.text}
          </button>
        </a>
      </div>
    </div>
  </div>
);
