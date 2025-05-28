import { merchandisesType, pickupMerchandisesType } from '@/app/types';

const merchandises: merchandisesType[] = [
  // 焼肉
  {
    title: '牛 サガリ',
    price: 500,
    category: 'grilled',
  },
  {
    title: '牛 タン ※1本単位 約800g〜',
    price: 600,
    category: 'grilled',
  },
  {
    title: '牛 カルビー (US/AU)',
    price: 200,
    category: 'grilled',
  },
  {
    title: '牛 カルビー (上)',
    price: 280,
    category: 'grilled',
  },
  {
    title: '牛 カルビー (国産)',
    price: 370,
    category: 'grilled',
  },
  {
    title: 'ラム <br /><自家製ジンタレ>　<br />↑ オススメ',
    price: 240,
    category: 'grilled',
  },
  {
    title: '牛 ホルモン <br /><特注ホルモンタレ・塩タレ>　<br />↑ オススメ',
    price: 180,
    category: 'grilled',
  },
  {
    title: '豚 ホルモン <br /><特注ホルモンタレ・塩タレ>　<br />↑ オススメ',
    price: 180,
    category: 'grilled',
  },
  {
    title: '豚 サガリ <br /> ※塩タレ付 1p単位 約300g入',
    price: 550,
    category: 'grilled',
  },
  {
    title: 'トントロ',
    price: 180,
    category: 'grilled',
  },
  {
    title: '豚 バラ',
    price: 160,
    category: 'grilled',
  },
  {
    title: '豚タン ※1本単位 約250g〜',
    price: 180,
    category: 'grilled'
  },
  {
    title: '豚 ガツ',
    price: 150,
    category: 'grilled',
  },
  {
    title: '豚 スペアリブ ※1p単位 約500g',
    price: 180,
    category: 'grilled',
  },
  {
    title: '鶏 セセリ',
    price: 200,
    category: 'grilled',
  },
  {
    title: '鶏 砂肝',
    price: 100,
    category: 'grilled',
  },
  {
    title: 'シャウエッセン',
    price: 200,
    category: 'grilled',
  },
  {
    title: 'Rポークウインナー',
    price: 150,
    category: 'grilled',
  },
  {
    title: '鶏皮 ※塩タレ付 1p単位 約200g入',
    price: 100,
    category: 'grilled',
  },
  {
    title: '豚バラ串 <br /> ※1p 20本入 バラ売り可',
    price: '70円 / 1400',
    category: 'grilled',
  },
  {
    title: 'ヤキトリ ※1p 20本売り バラ売り不可',
    price: 800,
    category: 'grilled',
  },

  // すき焼き・しゃぶしゃぶ
  {
    title: '牛 肩ロース(国産)',
    price: 500,
    category: 'sukiyaki',
  },
  {
    title: '牛 肩(国産)',
    price: 400,
    category: 'sukiyaki',
  },
  {
    title: '牛 バラ(国産)',
    price: 380,
    category: 'sukiyaki',
  },
  {
    title: '牛 肩ロース (US/AU)',
    price: 280,
    category: 'sukiyaki',
  },
  {
    title: '牛 バラ (US/AU)',
    price: 200,
    category: 'sukiyaki',
  },
  {
    title: 'ラム',
    price: 240,
    category: 'sukiyaki',
  },
  {
    title: '豚 ロース',
    price: 170,
    category: 'sukiyaki',
  },
  {
    title: '豚 肩ロース',
    price: 160,
    category: 'sukiyaki',
  },
  {
    title: '豚 バラ',
    price: 160,
    category: 'sukiyaki',
  },

    // 十勝彩美牛
  {
    title: '彩美牛 サーロイン <br /> (ステーキ すき焼き等に)',
    price: 800,
    category: 'saibi',
  },
  {
    title: '彩美牛 肩ロース <br /> (ステーキ すき焼き等に)',
    price: 730,
    category: 'saibi',
  },
  {
    title: '彩美牛 モモ <br /> (ステーキ ローストビーフ等に)',
    price: 480,
    category: 'saibi',
  },
  {
    title: '彩美牛 バラ <br /> (焼き肉 すき焼き等に)',
    price: 450,
    category: 'saibi',
  },
  {
    title: '彩美牛 カルビー <br /> (焼き肉等に)',
    price: 450,
    category: 'saibi',
  },
  {
    title: '彩美牛 特選カルビー <br /> (焼き肉等に)',
    price: 750,
    category: 'saibi',
  },
  
  // 豚肉
  {
    title: '豚 ロース',
    price: 170,
    category: 'pork',
  },
  {
    title: '豚 肩ロース',
    price: 160,
    category: 'pork',
  },
  {
    title: '豚 バラ',
    price: 160,
    category: 'pork',
  },
  {
    title: '豚 ヒレ',
    price: 220,
    category: 'pork',
  },
  {
    title: '豚 モモ',
    price: 120,
    category: 'pork',
  },
  {
    title: '豚 肩',
    price: 120,
    category: 'pork',
  },
  {
    title: '豚 レバー',
    price: 70,
    category: 'pork',
  },
  {
    title: '豚 骨',
    price: 40,
    category: 'pork',
  },
  {
    title: '豚 背脂',
    price: 50,
    category: 'pork',
  },

  // 牛肉
  {
    title: '牛 肩ロース(国産)',
    price: 500,
    category: 'beef',
  },
  {
    title: '牛 肩(国産)',
    price: 400,
    category: 'beef',
  },
  {
    title: '牛 バラ(国産)',
    price: 380,
    category: 'beef',
  },
  {
    title: '牛 肩ロース (US/AU)',
    price: 280,
    category: 'beef',
  },
  {
    title: '牛 バラ (US/AU)',
    price: 200,
    category: 'beef',
  },
  {
    title: '牛 モモ (US/AU)',
    price: 270,
    category: 'beef',
  },
  {
    title: '牛 スジ',
    price: 200,
    category: 'beef',
  },

  // 鶏肉
  {
    title: '鶏 モモ',
    price: 120,
    category: 'chicken',
  },
  {
    title: '鶏 ムネ',
    price: 100,
    category: 'chicken',
  },
  {
    title: '鶏 ササミ',
    price: 100,
    category: 'chicken',
  },
  {
    title: '鶏 セセリ',
    price: 200,
    category: 'chicken',
  },
  {
    title: '手羽先',
    price: 100,
    category: 'chicken',
  },
  {
    title: '手羽元',
    price: 100,
    category: 'chicken',
  },
  {
    title: '手羽中',
    price: 120,
    category: 'chicken',
  },
  {
    title: '鶏 砂肝',
    price: 100,
    category: 'chicken',
  },
  {
    title: '鶏 ガラ',
    price: 40,
    category: 'chicken',
  },

  // 挽肉
  {
    title: '豚 挽肉',
    price: 110,
    category: 'minced',
  },
  {
    title: '牛 挽肉',
    price: 180,
    category: 'minced',
  },
  {
    title: '鶏 挽肉',
    price: 100,
    category: 'minced',
  },
  {
    title: '牛豚合挽肉',
    price: 150,
    category: 'minced',
  },

  // 加工
  {
    title: 'ロースハム ※スライスのみ',
    price: 200,
    category: 'processing',
  },
  {
    title: 'バラベーコン',
    price: 200,
    category: 'processing',
  },
  {
    title: 'シャウエッセン ※1本約18g',
    price: 200,
    category: 'processing',
  },
  {
    title: 'Rポークウィンナー ※1本約20g',
    price: 150,
    category: 'processing',
  },
  {
    title: '皮ナシウイニー ※1本約8g',
    price: 220,
    category: 'processing',
  },

  // タレ
  {
    title: '<自社特製タレ・特注ホルモンタレ・塩タレ・自社特製ジンタレ> <br />( お好きなお肉にお好きなタレを組み合わせられます ！ )<br />※タレ単品でのご購入は致しかねます',
    price: '',
    category: 'tare',
  },

]

const pickupRanking: pickupMerchandisesType[] = [
  {
    title: '牛 サガリ (タレ)',
    price: 500,
    category: 'grilled',
    amount: '100g',
    ranking: 1
  },
  {
    title: '豚 ホルモン (塩タレ)',
    price: 180,
    category: 'grilled',
    amount: '100g',
    ranking: 2
  },
  {
    title: '豚 サガリ (塩タレ)',
    price: 550,
    category: 'grilled',
    amount: '300g 1p',
    ranking: 3
  },
  {
    title: 'ラム肉 (ジンタレ)',
    price: 240,
    category: 'grilled',
    amount: '100g',
    ranking: 4
  },
  {
    title: '牛 タン',
    price: 600,
    category: 'grilled',
    amount: '1本売り (約800g〜)',
    ranking: 5
  },
]

export { merchandises, pickupRanking};