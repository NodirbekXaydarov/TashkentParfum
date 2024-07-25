export const filterProducts = [
  {
    id: "one",
    label: "Все разделы",
    checked: false,
    children: [
      {
        id: "oneTwo",
        label: "Бестселлеры",
        checked: false,
      },
      {
        id: "oneThree",
        label: "Парфюмерия",
        checked: false,
        children: [
          {
            id: "twoOne",
            label: "Buildings",
            checked: false,
            children: [
              { id: "2.1", label: "Skyscraper", checked: false },
              { id: "2.2", label: "Apartment", checked: false },
              { id: "2.3", label: "Skyscraper", checked: false },
              { id: "2.4", label: "Apartment", checked: false },
              { id: "2.5", label: "Skyscraper", checked: false },
              { id: "2.6", label: "Apartment", checked: false },
            ],
          },
          {
            id: "twoTwo",
            label: "Giants",
            checked: false,
            children: [
              { id: "1.2.1", label: "Andre", checked: false },
              { id: "1.2.2", label: "Paul Bunyan", checked: false },
              { id: "1.2.3", label: "Andre", checked: false },
              { id: "1.2.4", label: "Paul Bunyan", checked: false },
              { id: "1.2.5", label: "Andre", checked: false },
              { id: "1.2.6", label: "Paul Bunyan", checked: false },
            ],
          },
          { id: "twoThree", label: "Two sandwiches", checked: false },
        ],
      },
      {
        id: "oneFour",
        label: "Волосы",
        checked: false,
      },
      {
        id: "oneFive",
        label: "Лицо",
        checked: false,
      },
      {
        id: "oneSix",
        label: "Тело и ванна",
        checked: false,
        children: [
          { id: "threeOne", label: "Smurfs", checked: false },
          { id: "threeTwo", label: "Mushrooms", checked: false },
          { id: "threeThree", label: "One Sandwich", checked: false },
        ],
      },
      {
        id: "oneSeven",
        label: "Макияж",
        checked: false,
        children: [
          { id: "fourOne", label: "Smurfs", checked: false },
          { id: "fourTwo", label: "Mushrooms", checked: false },
          { id: "fourThree", label: "One Sandwich", checked: false },
        ],
      },
      {
        id: "oneEight",
        label: "Мужчинам",
        checked: false,
        children: [
          { id: "fiveOne", label: "Smurfs", checked: false },
          { id: "fiveTwo", label: "Mushrooms", checked: false },
          { id: "fiveThree", label: "One Sandwich", checked: false },
        ],
      },
      {
        id: "oneNine",
        label: "Женщинам",
        checked: false,
      },
      {
        id: "oneTen",
        label: "Премиум",
        checked: false,
      },
    ],
  },
];
