import { BenefitProps } from '@/component/template/Benefit/Benefit.type';
import { Benefit } from '@/component/template/Benefit/index';
import { CtaProps } from '@/component/template/Cta/Cta.type';
import { Cta } from '@/component/template/Cta/index';
import { HeroProps } from '@/component/template/Hero/Hero.type';
import { Hero } from '@/component/template/Hero/index';
import { PricingProps } from '@/component/template/Pricing/Pricing.type';
import { Pricing } from '@/component/template/Pricing/index';
import { SympathyProps } from '@/component/template/Sympathy/Sympathy.type';
import { Sympathy } from '@/component/template/Sympathy/index';
import { PageFooterProps } from '@/component/template/common/PageFooter/PageFooter.type';
import { PageFooter } from '@/component/template/common/PageFooter/index';
import { PageHeaderProps } from '@/component/template/common/PageHeader/PageHeader.type';
import { PageHeader } from '@/component/template/common/PageHeader/index';

export interface PagesProps {
  pageHeader: PageHeaderProps;
  hero: HeroProps;
  sympathy: SympathyProps;
  benefit: BenefitProps;
  pricing: PricingProps;
  cta: CtaProps;
  pageFooter: PageFooterProps;
}

export const baseId = 'page-pages';

export const Pages = () => (
  <>
    <PageHeader />
    <Hero />
    <Sympathy />
    <Benefit />
    <Pricing />
    <Cta />
    <PageFooter />
  </>
);

export default Pages;
