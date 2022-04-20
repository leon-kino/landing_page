/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { PageFooterProps } from './PageFooter.type';

export const baseId = 'template-page-footer';

export const PageFooter: React.FC<PageFooterProps> = ({
  logo,
  catchphrase,
  iconList,
  aboutList,
  legalList,
  linksList,
  copylight,
}) => (
  <footer className='h-[630px]  bg-primary-800'>
    <div className='mx-auto flex w-10/12 items-end justify-between'>
      <div className='mt-[28px] ml-[49px] '>
        <Image {...logo} data-testId='t-c-pf-logo' />
      </div>
      <div>
        <p className='white-lg pb-4' data-testId='t-c-pf-cathphrase'>
          {catchphrase}
        </p>
      </div>
      <div>
        <p className='white-lg center pt-[44px]'>\SNSでシェア/</p>
        <div className='mt-[23px] mr-[67px] flex'>
          {iconList.map((icon, index) => (
            <a href={icon.link} key={index} data-testId={`t-c-pf-${icon.sns}-link`}>
              <div className='mx-[10px] flex h-[62px] w-[62px] items-center justify-center rounded bg-white'>
                <Image {...icon.image} data-testId={`t-c-pf-${icon.sns}`} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
    <hr className='mx-auto mt-[20px] w-10/12 border-white' />
    <div className='mx-auto flex w-10/12'>
      <div className='mx-[53px] mt-[57px] h-[233px] w-[225px]'>
        <h5 className='white-lg'>About</h5>
        <div className='mt-[15px]'>
          {aboutList.map((about, index) => (
            <a href={about.link} key={index} data-testId={`t-c-pf-about-${index}-link`}>
              <p className='white-base my-2' data-testId={`t-c-pf-about-${index}`}>
                {about.text}
              </p>
            </a>
          ))}
        </div>
      </div>
      <div className='mt-[56px] h-[197px] w-[272px]'>
        <h5 className='white-lg'>Legal</h5>
        <div className='mt-[15px]'>
          {legalList.map((legal, index) => (
            <a href={legal.link} key={index} data-testId={`t-c-pf-legal-${index}-link`}>
              <p className='white-base my-2' data-testId={`t-c-pf-legal-${index}`}>
                {legal.text}
              </p>
            </a>
          ))}
        </div>
      </div>
      <div className='mt-[57px] ml-[21px] h-[125px] w-[200px]'>
        <h5 className='white-lg'>Links</h5>
        <div className='mt-[15px]'>
          {linksList.map((links, index) => (
            <a href={links.link} key={index} data-testId={`t-c-pf-links-${index}-link`}>
              <p className='white-base my-2' data-testId={`t-c-pf-links-${index}`}>
                {links.text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
    <h6 className='white-lg mt-[73px] text-center' data-testId='t-c-pf-copylight'>
      {copylight}
    </h6>
  </footer>
);
