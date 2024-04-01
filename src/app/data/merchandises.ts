type merchandisesType = {
  title: string,
  desc: string,
  price: number,
  category: string,
  href: string,
  image: string
}

const merchandises: merchandisesType[] = [
  {
    title: 'サーロイン',
    desc: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。<br />テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。',
    price: 1000,
    category: 'beef',
    href: '/menu/beef/sirloin',
    image: '/menu/main/items/beef/sirloin.jpg',
  },
  {
    title: 'ロース',
    desc: 'テキストテキストテキストテキストテキスト。<br />テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。<br />テキストテキストテキストテキストテキストテキストテキストテキストテキスト。',
    price: 900,
    category: 'beef',
    href: '/menu/beef/loin',
    image: '/menu/main/items/beef/loin.jpg',
  },
  {
    title: 'モモ',
    desc: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。',
    price: 1000,
    category: 'beef',
    href: '/menu/beef/thigh',
    image: '/menu/main/items/beef/thigh.jpg',
  },
]

export default merchandises;