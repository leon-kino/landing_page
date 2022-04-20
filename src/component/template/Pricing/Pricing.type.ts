export interface PricingProps {
  title: string;
  subtitle: string;
  card: {
    title: string;
    description: string;
    price: number;
    membership: number;
    tax: number;
    tool: number;
    content1: string;
    check1: boolean;
    content2: string;
    check2: boolean;
    content3: string;
    check3: boolean;
    content4: string;
    check4: boolean;
    content5: string;
    check5: boolean;
    content6: string;
    check6: boolean;
  }[];
  content: string[];
}
