import { merchandisesType, pickupMerchandisesType } from '@/app/types';

const merchandises: merchandisesType[] = [
  // 焼肉
  {
    title: '牛 サガリ',
    price: 500,
    category: 'grilled',
    pickup: false,
  },
  {
    title: '牛 タン ※1本単位 約800g〜',
    price: 600,
    category: 'grilled',
    pickup: false,
  },
  {
    title: '牛 カルビー (US/AU)',
    price: 200,
    category: 'grilled',
    pickup: false,
  },
  {
    title: '牛 カルビー (上)',
    price: 280,
    category: 'grilled',
    pickup: false,
  },
  {
    title: '牛 カルビー (国産)',
    price: 370,
    category: 'grilled',
    pickup: false,
  },
  {
    title: 'ラム <br /><自家製ジンタレ>',
    price: 240,
    category: 'grilled',
    pickup: true,
  },
  {
    title: '牛 ホルモン <br /><特注ホルモンタレ・塩タレ>',
    price: 180,
    category: 'grilled',
    pickup: true,
  },
  {
    title: '豚 ホルモン <br /><特注ホルモンタレ・塩タレ>',
    price: 180,
    category: 'grilled',
    pickup: true,
  },
  {
    title: '豚 サガリ <br /> ※塩タレ付 1p単位 約300g入',
    price: 550,
    category: 'grilled',
    pickup: false,
  },
  {
    title: 'トントロ',
    price: 180,
    category: 'grilled',
    pickup: false,
  },
  {
    title: '豚 バラ',
    price: 160,
    category: 'grilled',
    pickup: false,
  },
  {
    title: '豚タン ※1本単位 約250g〜',
    price: 180,
    category: 'grilled',
    pickup: false,
  },
  {
    title: '豚 ガツ',
    price: 150,
    category: 'grilled',
    pickup: false,
  },
  {
    title: '豚 スペアリブ ※1p単位 約500g',
    price: 180,
    category: 'grilled',
    pickup: false,
  },
  {
    title: '鶏 セセリ',
    price: 200,
    category: 'grilled',
    pickup: false,
  },
  {
    title: '鶏 砂肝',
    price: 100,
    category: 'grilled',
    pickup: false,
  },
  {
    title: 'シャウエッセン',
    price: 200,
    category: 'grilled',
    pickup: false,
  },
  {
    title: 'Rポークウインナー',
    price: 150,
    category: 'grilled',
    pickup: false,
  },
  {
    title: '鶏皮 ※塩タレ付 1p単位 約200g入',
    price: 100,
    category: 'grilled',
    pickup: false,
  },
  {
    title: '豚バラ串 <br /> ※1p 20本入 バラ売り可',
    price: '70円 / 1400',
    category: 'grilled',
    pickup: false,
  },
  {
    title: 'ヤキトリ ※1p 20本売り バラ売り不可',
    price: 800,
    category: 'grilled',
    pickup: false,
  },

  // すき焼き・しゃぶしゃぶ
  {
    title: '牛 肩ロース(国産)',
    price: 500,
    category: 'sukiyaki',
    pickup: false,
  },
  {
    title: '牛 肩(国産)',
    price: 400,
    category: 'sukiyaki',
    pickup: false,
  },
  {
    title: '牛 バラ(国産)',
    price: 380,
    category: 'sukiyaki',
    pickup: false,
  },
  {
    title: '牛 肩ロース (US/AU)',
    price: 280,
    category: 'sukiyaki',
    pickup: false,
  },
  {
    title: '牛 バラ (US/AU)',
    price: 200,
    category: 'sukiyaki',
    pickup: false,
  },
  {
    title: 'ラム',
    price: 240,
    category: 'sukiyaki',
    pickup: false,
  },
  {
    title: '豚 ロース',
    price: 170,
    category: 'sukiyaki',
    pickup: false,
  },
  {
    title: '豚 肩ロース',
    price: 160,
    category: 'sukiyaki',
    pickup: false,
  },
  {
    title: '豚 バラ',
    price: 160,
    category: 'sukiyaki',
    pickup: false,
  },

    // 十勝彩美牛
  {
    title: '彩美牛 サーロイン <br /> (ステーキ すき焼き等に)',
    price: 800,
    category: 'saibi',
    pickup: false,
  },
  {
    title: '彩美牛 肩ロース <br /> (ステーキ すき焼き等に)',
    price: 730,
    category: 'saibi',
    pickup: false,
  },
  {
    title: '彩美牛 モモ <br /> (ステーキ ローストビーフ等に)',
    price: 480,
    category: 'saibi',
    pickup: false,
  },
  {
    title: '彩美牛 バラ <br /> (焼き肉 すき焼き等に)',
    price: 450,
    category: 'saibi',
    pickup: false,
  },
  {
    title: '彩美牛 カルビー <br /> (焼き肉等に)',
    price: 450,
    category: 'saibi',
    pickup: false,
  },
  {
    title: '彩美牛 特選カルビー <br /> (焼き肉等に)',
    price: 750,
    category: 'saibi',
    pickup: false,
  },
  
  // 豚肉
  {
    title: '豚 ロース',
    price: 170,
    category: 'pork',
    pickup: false,
  },
  {
    title: '豚 肩ロース',
    price: 160,
    category: 'pork',
    pickup: false,
  },
  {
    title: '豚 バラ',
    price: 160,
    category: 'pork',
    pickup: false,
  },
  {
    title: '豚 ヒレ',
    price: 220,
    category: 'pork',
    pickup: false,
  },
  {
    title: '豚 モモ',
    price: 120,
    category: 'pork',
    pickup: false,
  },
  {
    title: '豚 肩',
    price: 120,
    category: 'pork',
    pickup: false,
  },
  {
    title: '豚 レバー',
    price: 70,
    category: 'pork',
    pickup: false,
  },
  {
    title: '豚 骨',
    price: 40,
    category: 'pork',
    pickup: false,
  },
  {
    title: '豚 背脂',
    price: 50,
    category: 'pork',
    pickup: false,
  },

  // 牛肉
  {
    title: '牛 肩ロース(国産)',
    price: 500,
    category: 'beef',
    pickup: false,
  },
  {
    title: '牛 肩(国産)',
    price: 400,
    category: 'beef',
    pickup: false,
  },
  {
    title: '牛 バラ(国産)',
    price: 380,
    category: 'beef',
    pickup: false,
  },
  {
    title: '牛 肩ロース (US/AU)',
    price: 280,
    category: 'beef',
    pickup: false,
  },
  {
    title: '牛 バラ (US/AU)',
    price: 200,
    category: 'beef',
    pickup: false,
  },
  {
    title: '牛 モモ (US/AU)',
    price: 270,
    category: 'beef',
    pickup: false,
  },
  {
    title: '牛 スジ',
    price: 200,
    category: 'beef',
    pickup: false,
  },

  // 鶏肉
  {
    title: '鶏 モモ',
    price: 120,
    category: 'chicken',
    pickup: false,
  },
  {
    title: '鶏 ムネ',
    price: 100,
    category: 'chicken',
    pickup: false,
  },
  {
    title: '鶏 ササミ',
    price: 100,
    category: 'chicken',
    pickup: false,
  },
  {
    title: '鶏 セセリ',
    price: 200,
    category: 'chicken',
    pickup: false,
  },
  {
    title: '手羽先',
    price: 100,
    category: 'chicken',
    pickup: false,
  },
  {
    title: '手羽元',
    price: 100,
    category: 'chicken',
    pickup: false,
  },
  {
    title: '手羽中',
    price: 120,
    category: 'chicken',
    pickup: false,
  },
  {
    title: '鶏 砂肝',
    price: 100,
    category: 'chicken',
    pickup: false,
  },
  {
    title: '鶏 ガラ',
    price: 40,
    category: 'chicken',
    pickup: false,
  },

  // 挽肉
  {
    title: '豚 挽肉',
    price: 110,
    category: 'minced',
    pickup: false,
  },
  {
    title: '牛 挽肉',
    price: 180,
    category: 'minced',
    pickup: false,
  },
  {
    title: '鶏 挽肉',
    price: 100,
    category: 'minced',
    pickup: false,
  },
  {
    title: '牛豚合挽肉',
    price: 150,
    category: 'minced',
    pickup: false,
  },

  // 加工
  {
    title: 'ロースハム ※スライスのみ',
    price: 200,
    category: 'processing',
    pickup: false,
  },
  {
    title: 'バラベーコン',
    price: 200,
    category: 'processing',
    pickup: false,
  },
  {
    title: 'シャウエッセン ※1本約18g',
    price: 200,
    category: 'processing',
    pickup: false,
  },
  {
    title: 'Rポークウィンナー ※1本約20g',
    price: 150,
    category: 'processing',
    pickup: false,
  },
  {
    title: '皮ナシウイニー ※1本約8g',
    price: 220,
    category: 'processing',
    pickup: false,
  },

  // タレ
  {
    title: '<自社特製タレ・特注ホルモンタレ・塩タレ・自社特製ジンタレ> <br />( お好きなお肉にお好きなタレを組み合わせられます ！ )<br />※タレ単品でのご購入は致しかねます',
    price: '',
    category: 'tare',
    pickup: false,
  },

]

const pickupRanking: pickupMerchandisesType[] = [
  {
    title: '彩美牛 肩ロース <br /> (ステーキ すき焼き等に)',
    price: 730,
    category: 'saibi',
    amount: '100g',
    ranking: 1
  },
  {
    title: 'ラム',
    price: 240,
    category: 'sukiyaki',
    amount: '100g',
    ranking: 2
  },
  {
    title: '牛 タン',
    price: 600,
    category: 'grilled',
    amount: '1本売り (約800g〜)',
    ranking: 3
  },
  {
    title: '牛 サガリ',
    price: 500,
    category: 'grilled',
    amount: '100g',
    ranking: 4
  },
  {
    title: '豚 サガリ',
    price: 550,
    category: 'grilled',
    amount: '300g 1p',
    ranking: 5
  },
]

export { merchandises, pickupRanking};