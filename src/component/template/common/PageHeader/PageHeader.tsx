/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { PageHeaderProps } from './PageHeader.type';

export const baseId = 'template-page-header';

export const PageHeader: React.FC<PageHeaderProps> = ({ logo, navList, button }) => (
  <header className='w-[1440px] bg-primary-800'>
    <div className='flex justify-between'>
      <div className='flex'>
        <a href={logo.link} className='py-[20px] px-[36px]' data-testId='t-c-ph-logo-link'>
          <Image {...logo.image} data-testId='t-c-ph-logo' />
        </a>
        <ul className='flex'>
          {navList.map((nav, index) => (
            <a
              href={nav.link}
              key={index}
              className='white-base border-primary-100 hover:border-b-4 hover:bg-primary-600'
              data-testId={`t-c-ph-nav-${index}-link`}
            >
              <li
                className='flex h-[100px] w-[150px] items-center justify-center '
                data-testId={`t-c-ph-nav-${index}`}
              >
                {nav.text}
              </li>
            </a>
          ))}
        </ul>
      </div>
      <a
        href={button.link}
        className='pt-[13px] pr-[34px] pb-[11px]'
        data-testId='t-c-ph-button-link'
      >
        <button
          className='button-orange-default h-[76px] w-[292px] hover:opacity-90'
          data-testId='t-c-ph-button'
        >
          {button.text}
        </button>
      </a>
    </div>
  </header>
);
