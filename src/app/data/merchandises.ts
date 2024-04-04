type merchandisesType = {
  title: string,
  desc: string,
  price: number,
  category: string,
  // href: string,
}

type pickupRankingType = {
  title: string,
  desc: string,
  price: number,
  category: string,
  // href: string,
  ranking: number
}

const merchandises: merchandisesType[] = [
  {
    title: '豚 ロース',
    desc: '',
    price: 170,
    category: 'pork',
  },
  {
    title: '豚 肩ロース',
    desc: '',
    price: 160,
    category: 'pork',
  },
  {
    title: '豚 バラ',
    desc: '',
    price: 160,
    category: 'pork',
  },
  {
    title: '豚 モモ',
    desc: '',
    price: 120,
    category: 'pork',
  },
  {
    title: '豚 肩',
    desc: '',
    price: 120,
    category: 'pork',
  },
  {
    title: '豚 ヒレ',
    desc: '',
    price: 220,
    category: 'pork',
  },
  {
    title: '豚 挽肉',
    desc: '',
    price: 110,
    category: 'pork',
  },
  {
    title: '牛・豚 合挽肉',
    desc: '',
    price: 150,
    category: 'pork',
  },
  {
    title: '豚 レバー',
    desc: '',
    price: 70,
    category: 'pork',
  },
  {
    title: '豚 骨',
    desc: '',
    price: 40,
    category: 'pork',
  },
  {
    title: '豚 背脂',
    desc: '',
    price: 50,
    category: 'pork',
  },
  {
    title: '豚 足ボイル',
    desc: '',
    price: 70,
    category: 'pork',
  },
  {
    title: '鶏 モモ',
    desc: '',
    price: 110,
    category: 'chicken',
  },
  {
    title: '鶏 ムネ',
    desc: '',
    price: 70,
    category: 'chicken',
  },
  {
    title: '手羽先',
    desc: '',
    price: 80,
    category: 'chicken',
  },
  {
    title: '手羽元',
    desc: '',
    price: 80,
    category: 'chicken',
  },
  {
    title: '手羽中',
    desc: '',
    price: 100,
    category: 'chicken',
  },
  {
    title: 'ササミ',
    desc: '',
    price: 100,
    category: 'chicken',
  },
  {
    title: '鶏 レバー',
    desc: '',
    price: 70,
    category: 'chicken',
  },
  {
    title: '鶏 砂肝',
    desc: '',
    price: 80,
    category: 'chicken',
  },
  {
    title: '鶏 ガラ',
    desc: '',
    price: 40,
    category: 'chicken',
  },
  {
    title: '牛 肩ロース',
    desc: '',
    price: 500,
    category: 'beef',
  },
  {
    title: '牛 肩',
    desc: '',
    price: 400,
    category: 'beef',
  },
  {
    title: '牛 バラ',
    desc: '',
    price: 200,
    category: 'beef',
  },
  {
    title: '牛 モモ (us)',
    desc: '',
    price: 270,
    category: 'beef',
  },
  {
    title: '牛 バラ (us)',
    desc: '',
    price: 200,
    category: 'beef',
  },
  {
    title: '牛 肩ロース (us)',
    desc: '',
    price: 280,
    category: 'beef',
  },
  {
    title: '牛 挽肉',
    desc: '',
    price: 180,
    category: 'beef',
  },
  {
    title: '牛 すじ',
    desc: '',
    price: 200,
    category: 'beef',
  },
  {
    title: '彩美牛 サーロイン',
    desc: '',
    price: 800,
    category: 'saibi',
  },
  {
    title: '彩美牛 肩ロース',
    desc: '',
    price: 730,
    category: 'saibi',
  },
  {
    title: '彩美牛 もも',
    desc: '',
    price: 480,
    category: 'saibi',
  },
  {
    title: '彩美牛 バラ',
    desc: '',
    price: 450,
    category: 'saibi',
  },
  {
    title: '彩美牛 カルビー',
    desc: '',
    price: 450,
    category: 'saibi',
  },
  {
    title: '彩美牛 特選カルビー',
    desc: '',
    price: 750,
    category: 'saibi',
  },
  {
    title: 'ロースハム',
    desc: '',
    price: 200,
    category: 'processing',
  },
  {
    title: 'バラベーコン',
    desc: '',
    price: 200,
    category: 'processing',
  },
  {
    title: 'シャウエッセン',
    desc: '',
    price: 200,
    category: 'processing',
  },
  {
    title: 'Cポークウィンナー',
    desc: '',
    price: 180,
    category: 'processing',
  },
  {
    title: '皮ナシウイニー',
    desc: '',
    price: 220,
    category: 'processing',
  },
  {
    title: '牛 サガリ (上) (us)',
    desc: '',
    price: 500,
    category: 'grilled',
  },
  {
    title: '牛 カルビー (us)',
    desc: '',
    price: 200,
    category: 'grilled',
  },
  {
    title: '牛 カルビー上 (us)',
    desc: '',
    price: 280,
    category: 'grilled',
  },
  {
    title: '牛 カルビー 国産',
    desc: '',
    price: 370,
    category: 'grilled',
  },
  {
    title: '牛 タン 1本売り (約800g〜)',
    desc: '',
    price: 660,
    category: 'grilled',
  },
  {
    title: '牛 ホルモン <br className={Style.sp_only}/>(生・特注ホルたれ・塩タレ)',
    desc: '',
    price: 180,
    category: 'grilled',
  },
  {
    title: 'ラム肉 <br className={Style.sp_only}/> (ジンギスカン・しやぶ・特注ジンたれ)',
    desc: '',
    price: 240,
    category: 'grilled',
  },
  {
    title: 'ヤキトリ 20本売り (1本あたり)',
    desc: '',
    price: 40,
    category: 'grilled',
  },
  {
    title: '豚バラ串 (1本あたり)',
    desc: '',
    price: 70,
    category: 'grilled',
  },
  {
    title: '鶏 セセリ',
    desc: '',
    price: 180,
    category: 'grilled',
  },
  {
    title: '鶏 砂肝',
    desc: '',
    price: 80,
    category: 'grilled',
  },
  {
    title: '豚 バラ 焼肉カット',
    desc: '',
    price: 160,
    category: 'grilled',
  },
  {
    title: 'トントロ 焼肉カット',
    desc: '',
    price: 180,
    category: 'grilled',
  },
  {
    title: '豚 ホルモン <br className={Style.sp_only}/>(生・特注ホルたれ・塩タレ)',
    desc: '',
    price: 180,
    category: 'grilled',
  },
  {
    title: '豚タン 1本 (約250g)',
    desc: '',
    price: 160,
    category: 'grilled',
  },
  {
    title: '豚 ガツ',
    desc: '',
    price: 150,
    category: 'grilled',
  },
  {
    title: '豚 スペアリブ (1p 約500g)',
    desc: '',
    price: 180,
    category: 'grilled',
  },
  {
    title: '豚 サガリ <br className={Style.sp_only}/>(本格塩味付) (1p 300g)',
    desc: '',
    price: 550,
    category: 'grilled',
  },
  {
    title: '鶏皮 味付き (1p 200g)',
    desc: '',
    price: 100,
    category: 'grilled',
  },
]

const pickupRanking: pickupRankingType[] = [
  {
    title: '彩美牛 モモ',
    desc: '',
    price: 480,
    category: 'saibi',
    ranking: 1
  },
  {
    title: '牛 サガリ (上)',
    desc: '',
    price: 500,
    category: 'grilled',
    ranking: 2
  },
  {
    title: '牛 ホルモン <br className={Style.sp_only}/>(生・特注ホルたれ・塩タレ)',
    desc: '',
    price: 180,
    category: 'grilled',
    ranking: 3
  },
  {
    title: '豚 サガリ (本格塩味付) 300g',
    desc: '',
    price: 550,
    category: 'grilled',
    ranking: 4
  },
  {
    title: 'ラム肉 <br className={Style.sp_only}/> (ジンギスカン・しやぶ・特注ジンたれ)',
    desc: '',
    price: 240,
    category: 'grilled',
    ranking: 5
  },
]

export { merchandises, pickupRanking};