export type TStaticPage = {
  title: string;
  second_title: string;
  slug: string;
};

export type TStaticPageDetails = {
  title: string;
  second_title: string;
  body: string;
};

export type TStatistics = {
  users_count: number;
  categories_count: number;
  orders_count: number;
};

export type TAbout = {
  id?: number;
  description: string;
};
