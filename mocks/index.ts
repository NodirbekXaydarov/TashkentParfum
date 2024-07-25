import type { ICreditCartForm } from "~/types/cart";

// Search Data
export const searchFilter = [
  {
    id: 1,
    title: "Шампунь против перхоти Dr.Clinic Anti-Dandruff Shampoo 400мл",
    img: "/data/search/shampoo1.jpg",
  },
  {
    id: 2,
    title: "Шампунь Шямла 200 мл/Shyamla Herbal Shampoo УТ-00004073",
    img: "/data/search/shampoo2.jpg",
  },
  {
    id: 3,
    title:
      "Шампунь для окрашенных волос Dr.Clinic Color Treated Hair Shampoo 400мл",
    img: "/data/search/shampoo3.jpg",
  },
  {
    id: 4,
    title: "Шампунь против перхоти Dr.Clinic Anti-Dandruff Shampoo 400мл",
    img: "/data/search/shampoo4.jpg",
  },
  {
    id: 5,
    title: "Шампунь против перхоти Dr.Clinic Anti-Dandruff Shampoo 400мл",
    img: "/data/search/shampoo5.jpg",
  },
  {
    id: 6,
    title: "Мыло против перхоти Dr.Clinic Anti-Dandruff Shampoo 400мл",
    img: "/data/search/shampoo3.jpg",
  },
  {
    id: 7,
    title: "Гель против перхоти Dr.Clinic Anti-Dandruff Shampoo 400мл",
    img: "/data/search/shampoo1.jpg",
  },
];

// Popular Brands Carousel
export const popularBrands = [
  { id: 1, img: "/data/brands/brand-1.png", name: "saint laurent paris" },
  { id: 2, img: "/data/brands/brand-2.png", name: "versace" },
  { id: 3, img: "/data/brands/brand-3.png", name: "zara" },
  { id: 4, img: "/data/brands/brand-4.png", name: "hugo boss" },
  { id: 5, img: "/data/brands/brand-5.png", name: "giogio armani" },
  { id: 6, img: "/data/brands/brand-6.png", name: "dior" },
  { id: 7, img: "/data/brands/brand-7.png", name: "burberry" },
  { id: 8, img: "/data/brands/brand-8.png", name: "giorgio alessandro" },
  { id: 9, img: "/data/brands/brand-9.png", name: "kenzo parfums" },
  { id: 10, img: "/data/brands/brand-10.png", name: "ferrari" },
  { id: 11, img: "/data/brands/brand-11.png", name: "brocard" },
  { id: 12, img: "/data/brands/brand-12.png", name: "gucci" },
  { id: 13, img: "/data/brands/brand-10.png", name: "zara" },
  { id: 14, img: "/data/brands/brand-1.png", name: "hugo boss" },
  { id: 15, img: "/data/brands/brand-8.png", name: "dior" },
];

export const creditCardsData: ICreditCartForm[] = [
  {
    type: "humo",
    number: "9860 83** **** 8600",
    valid: "12/25",
  },
  {
    type: "uzcard",
    number: "9860 81** **** 8600",
    valid: "12/25",
  },
];
