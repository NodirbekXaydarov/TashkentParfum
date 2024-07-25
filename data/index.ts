import type { IRegions, ISelect } from "@/types"
import regionsData from "./regions.json";
let id = 0;
export const catalogData = [
  {
    id: id++,
    label: "perfumery",
    links: [
      "men_fragrances",
      "women_fragrances",
      "gift_sets",
      "gift_sets",
      "wood_fragrances",
      "floral_fragrances",
    ],
  },
  {
    id: id++,
    label: "hair",
    links: ["mist", "conditioner", "shampoos", "lacquers", "milk", "oil"],
  },
  {
    id: id++,
    label: "makeup",
    links: [
      "eyeshadows",
      "tonal_cream",
      "mascara",
      "lipsticks",
      "powder",
      "highlighters",
    ],
  },
  {
    id: id++,
    label: "face",
    links: [
      "face_cream",
      "foams_and_gels",
      "face_masks_and_patches",
      "scrubs_and_peels",
      "makeup_bases",
      "powder",
    ],
  },
  {
    id: id++,
    label: "body_and_bath",
    links: [
      "body_shaving_liquid",
      "after_shave_liquid",
      "body_sprays",
      "hand_and_foot_creams",
      "shower_gels",
      "liquid_soap",
    ],
  },
];

export const footer_links = [
  {
    id: 0,
    label: "customers",
    links: ["about_store", "recommendations", "brands", "privacy", "feedback"],
  },
  {
    id: 1,
    label: "sections",
    links: ["perfumery", "body_and_bath", "hair", "face", "all_sections"],
  },
  {
    id: 2,
    label: "user",
    links: ["login", "register"],
  },
];

export const mobileAppStoreLinks = [
  {
    key: "apple-store",
    img: "/images/icons/apple.svg",
    link: "https://apps.apple.com/uz/app/toshkent-parfum/id6458222909",
  },
  {
    key: "play-store",
    img: "/images/icons/google-play.svg",
    link: "https://play.google.com/store/apps/details?id=uz.tashkentparfum.tashkentparfumapp&pli=1",
  },
]

export const regions: IRegions[] = [...regionsData];
export const districts: ISelect[] = []
regions.forEach((region) => {
  const district = region.districts?.map((dis) => {
    dis.value = dis.value.split(' ').join('-').replace(/[',.]/gi, '');
    return dis
  }); 
  districts.push(...district ?? []);
})
