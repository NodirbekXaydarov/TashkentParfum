export const comments: IComments[] = [];

import type { IComments } from "~/types/comments";

for (let i = 0; i < 15; i++) {
  const date = new Date();
  comments.push({
    id: i,
    title: "Gilette мужские бритва " + i,
    description:
      i +
      " Бритва, то что нужно мужчинам, 3-х ная лезьвия, брить можно свободно и чисто, очень безопасно, советую всем мужикам. ",
    product: {
      img: "/images/product.svg",
    },
    user: {
      avatar: "/images/product.svg",
      name: "user3103_" + 1,
    },
    commentDate: {
      date: date,
      time: date.getHours() + ":" + date.getMinutes(),
    },
    ratings: 3,
  });
}
