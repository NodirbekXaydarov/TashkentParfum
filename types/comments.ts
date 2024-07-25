export interface IComments {
    id: string | number
    title: string | number
    description: string | number
    product: {
      img: string
    },
    user: {
      avatar: string
      name: string | number
    },
    commentDate: {
      date: Date
      time: Date | string
    },
    ratings: number
}