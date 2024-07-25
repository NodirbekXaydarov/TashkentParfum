export interface ProductCart {
  id: number;
  title: string;
  manufacture: string;
  price: number | string;
  like: boolean;
  star: number;
  images: {
    default: string
  }[];
}

export interface ProductAbout {
  description: string;
  year: number;
  volume: string;
  brand: string;
  favor_audience: string;
  country: string;
  target_audience?: string;
}

export interface ProductVolume {
  name: string;
  available: boolean;
}

export interface PersonReview {
  name: string;
  rating: number;
  comment: string;
  time: Date;
  image: string | undefined;
}

export interface PSingle {
  id: number;
  title: string;
  tags: string[];
  stars: number;
  discount: "yes" | "no";
  type: string;
  volumes: ProductVolume[];
  price: number;
  original_price?: number;
  images: string[];
  about: ProductAbout;
  reviews: PersonReview[];
}
