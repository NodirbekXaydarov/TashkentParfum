export interface ITopBrand {
  id: string | number;
  title: string;
  desc: string;
  logo: string;
  img: string;
  mainPrice: number | string;
  priceLeft: number | string;
  priceRight: number | string;
}

export interface IPopularBrand {
  id: number | string;
  title: string;
  img: string;
}
