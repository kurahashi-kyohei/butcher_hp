interface merchandisesType {
  title: string,
  price: number | string,
  category: string,
  pickup: boolean,
}

interface pickupMerchandisesType {
  title: string,
  price: number,
  category: string,
  amount: string,
  ranking: number
}

interface categoriesType {
  title: string,
  href: string,
}

interface calendarType {
  date: string,
  close: boolean,
}

export type { merchandisesType, categoriesType, pickupMerchandisesType, calendarType };