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
  if (!data) return <h2 className='text-orange'>\現在___名がダウンロード/</h2>;
  return <h2 className='text-orange'>\現在{data.length}名がダウンロード/</h2>;
};
export const baseId = 'template-hero';

export const Hero: React.FC<HeroProps> = ({ title, content, button }) => (
  <div className='h-[800px] w-[1440px]'>
    <div className='m-auto h-[839px] w-[1358px] bg-hero bg-no-repeat'>
      <div className='ml-[44px] h-[474px] w-[576px] pt-[144px] '>
        <h1 className='black-2xl' data-testId='t-h-title'>
          {title}
        </h1>
        <h2 className='black-xl mt-[30px]' data-testId='t-h-content'>
          {content}
        </h2>
        <div className='mt-[100px]'>
          <a href={button.link} data-testId='t-h-button-link'>
            {Profile()}
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
  </div>
);
