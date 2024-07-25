export type TProduct = {
  id?: number;
  title: string;
  slug?: string;
  rate?: number;
  comment_count?: number;
  price?: string;
  price_without_discount?: string;
  sale_price?: string;
  result_price?: string;
  weight?: string;
  images?: any;
  is_new: boolean;
  is_liked?: boolean;
  is_cart?: boolean;
  unit?: {
    id?: number;
    title: string;
  };
  unit_value: number;
  manufacturer?: {
    id?: number;
    title: string;
  };
  realtime_count?: number;
};

export type TBrandsProduct = {
  id?: number;
  title: string;
  description?: string;
  override_price: string;
  warehouse: number;
  icon?: string;
  products?: any;
};

export type TPopularCategory = {
  id?: number;
  title: string;
  parent_id?: string;
  depth?: number; // depth
  icon_src?: any;
};

export type TSubSubCategory = {
  id?: number;
  title: string;
  parent_id?: string;
  icon_src?: string;
};

export type TSubCategory = {
  id?: number;
  title: string;
  parent_id?: string;
  icon_src?: string;
  categories: TSubSubCategory[];
};

export type TCategoryDetail = {
  id?: number;
  slug?: string; // slug
  title: string;
  icon_src?: string;
  categories: TSubCategory[];
  banners?: string; // banners
};

export type TManufacturer = {
  id?: number;
  title: string;
  override_price: string;
  warehouse: string;
  icon: string;
};

export type TTopCommentUser = {
  id?: number;
  full_name?: string;
  avatar_src?: string;
  created_at?: string;
};

export type TTopCommentProduct = {
  id?: number;
  title: string;
  slug?: string;
  images?: any;
  description?: string;
  is_new: boolean;
  is_liked?: boolean;
  is_cart?: boolean;
};

export type TTopComment = {
  id?: number;
  user?: TTopCommentUser;
  rate: number;
  comment?: string;
  product?: TTopCommentProduct;
  created_at?: string;
};

export type TProductDetails = {
  id?: number;
  title: string;
  slug?: string;
  manufacturer?: {
    id?: number;
    title: string;
    override_price: string;
    warehouse: number;
    icon?: string;
  };
  images?: any;
  description?: string;
  feature?: string;
  apply?: string;
  unit: {
    id?: number;
    title: string;
  };
  unit_value: number;
  weight?: string;
  product_group?: number;
  product_group_title?: string;
  category?: TSubCategory;
  sale_price?: string;
  price?: string;
  price_without_discount?: string;
  rate?: number;
  year?: number;
  realtime_count: number;
  targeted_gender: string;
  manufactured_country?: string;
  targeted_audience?: string;
  comment_count?: number;
  views?: number;
  is_new: boolean;
  is_liked?: boolean;
  is_cart?: boolean;
  has_comment?: boolean;
  can_comment?: boolean;
  active_megasale?: {
    title: string;
    percentage: number;
    end_at: string;
  };
  groups?: {
    id?: number;
    title?: string;
    slug?: string;
  }[];
};

export type TUserComment = {
  id?: number;
  full_name?: string;
  avatar_src?: any;
  created_at?: string;
};

export type TProductComment = {
  id?: number;
  user?: TUserComment;
  rate: number;
  comment?: string;
  created_at?: string;
};

export type TProductCommentRates = {
  rate: number;
  total: number;
  rates: {
    rate: number;
    percent: number;
    count: number;
  }[];
};
