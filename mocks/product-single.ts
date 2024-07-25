interface ProductAbout {
  description: string;
  year: number;
  volume: string;
  brand: string;
  favor_audience: string;
  country: string;
  target_audience?: string;
}

interface ProductVolume {
  name: string;
  available: boolean;
}

interface PersonReview {
  name: string;
  rating: number;
  comment: string;
  time: Date;
  image: string | undefined;
}

interface PSingle {
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

function randomDate(date1: number | string, date2: number | string) {
  function randomValueBetween(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  var date1 = date1 || "01-01-1970";
  var date2 = date2 || new Date().toLocaleDateString();
  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();
  if (date1 > date2) {
    return new Date(randomValueBetween(date2, date1));
  } else {
    return new Date(randomValueBetween(date1, date2));
  }
}

export const productSingle: PSingle = {
  id: 1,
  title:
    "CLIVE CHRISTIAN Absolute Jasmin масляные духи 30 мл для женщин духи-масло",
  tags: ["Parfyumeriya", "Ayollar uchun"],
  stars: 3.6,
  discount: "yes",
  type: "Оригинал (Франция)",
  volumes: [
    { name: "50 ml", available: true },
    { name: "75 ml", available: true },
    { name: "100 ml", available: true },
    { name: "200 ml", available: false },
  ],
  price: 50564128,
  original_price: 173283785,
  images: [
    "https://toshkent-parfum.uz/media/cache/a8/69/a869360fe49af1f711d922e424e51439.webp",
    "https://toshkent-parfum.uz/media/cache/9a/e4/9ae41ed3e650d3a5edfc20bd4c230d22.webp",
    "https://toshkent-parfum.uz/media/cache/7b/a5/7ba54c7d805ca3ee5c9df17ec7feaaa7.webp",
  ],
  about: {
    description:
      "CLIVE CHRISTIAN Absolute Jasmin — это 100% чистое парфюмерное масло, самое концентрированное и роскошное предложение. Абсолют состоит из более чем 200 ингредиентов, это наше самое сложное парфюмерное предложение. Формула чистого масла обеспечивает более сильное и захватывающее ощущение аромата, при этом каждое парфюмерное масло остается на коже до 12 часов и более. Jasmine Absolute вдохновлен нашей изысканной парой X, это парфюмерное наслаждение - праздник короля цветов во всем его цветущем величии. \n Absolute – это вершина парфюмерии класса люкс. Самые лучшие творения, известные миру парфюмерии – необыкновенные, сложные формулы со 100%-ной концентрацией чистого парфюма – идеальное предложение для знатока. Изготавливаемый на заказ продукт с высочайшим уровнем персонализации, доступным в нашем портфолио. Уникальное предложение для ценителей роскошной парфюмерии.\nClive Christian Perfume — ведущий независимый британский парфюмерный дом, стремящийся создавать лучшие в мире духи. Предшественница бренда, Crown Perfumery Company, основанная в 1872 году, является единственным домом, которому когда-либо было предоставлено разрешение использовать корону королевы Виктории на своих флаконах. Образ, который и по сей день определяет каждый флакон духов Clive Christian.",
    year: 2005,
    volume: "30 ml",
    brand: "CLIVE CHRISTIAN",
    favor_audience: "Мужской",
    country: "Франсия",
    target_audience: "Взрослые мучины",
  },
  reviews: [
    {
      name: "Бахтияров Дастан",
      rating: 5,
      comment:
        "Я ее обожаю пользуюсь последние 15 лет, пока не могу сменить отчетливо чувствую запахи других парфюмиррванных вод.",
      time: new Date(new Date().getTime() - 2 * 60 * 60 * 1000),
      image: "/data/profile/User-1.svg",
    },
    {
      name: "Пулатов Жасурбек",
      rating: 3,
      comment:
        "Все было бы идеально если бы не конечное отношение курьера назначенного на доставку моего товара. Обматерил меня, не осознавая что челюстьу него не титановая. Пожалуйста, проведите беседу со всеми курьерами и научите элементарной этике!",
      time: randomDate("05/13/2024", "01/01/2022"),
      image: "/data/profile/User-2.svg",
    },
    {
      name: "Нарзуллаев Нозим",
      rating: 3,
      comment:
        "С доставкой были ОЧЕНЬ большие проблемы + хамство и нежелание работать курьера",
      time: randomDate("05/13/2024", "01/01/2022"),
      image: "/data/profile/User-3.svg",
    },
    {
      name: "Шавкиев Шохрух",
      rating: 1,
      comment:
        "Уважаемые разработчики обновление вроде норм, но есть минусы. Ставлю уверенную четверочку",
      time: randomDate("05/13/2024", "01/01/2022"),
      image: undefined,
    },
    {
      name: "Каримов Тимур",
      rating: 5,
      comment:
        "Аромат восхитительный, стойкость на весь день. Очень доволен качеством и покупкой! ",
      time: randomDate("05/13/2024", "01/01/2022"),
      image: undefined,
    },
    {
      name: "Юлдашева Дильноза",
      rating: 3,
      comment:
        "Запах приятный, но выветривается быстро, не хватает стойкости. В целом неплохо.",
      time: randomDate("05/13/2024", "01/01/2022"),
      image: undefined,
    },
    {
      name: "Ташметов Музаффар",
      rating: 5,
      comment:
        "Парфюм шикарный, держится весь день, комплименты получаю постоянно. Очень рад покупке! ",
      time: randomDate("05/13/2024", "01/01/2022"),
      image: undefined,
    },
    {
      name: "Рахманова Гульнара",
      rating: 4,
      comment:
        "Неплохой аромат, но ожидал более длительной стойкости. Впечатления смешанные. ",
      time: randomDate("05/13/2024", "01/01/2022"),
      image: undefined,
    },
    {
      name: "Худайбердиев Алибек",
      rating: 3,
      comment:
        "Запах классный, но держится недолго. Хотелось бы лучшей стойкости.",
      time: randomDate("05/13/2024", "01/01/2022"),
      image: undefined,
    },
  ],
};
