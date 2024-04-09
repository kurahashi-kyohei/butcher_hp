type newsType = {
  id: number,
  title: string,
  date?: {
    year: number;
    month: number;
    day: number;
    week: string;
  },
  desc: string
}

const news: newsType[] = [
  {
    id: 2,
    title: 'GW(ゴールデンウィーク)中の営業時間について',
    date: { year: 2024, month: 4, day: 10, week: '水'},
    desc: 'いつもブッチャー丸幸をご愛顧いただきまして、ありがとうございます。<br /><br />GW期間内の営業時間の変更がございますので、お知らせいたします。<br /><br /><ul><li><p>〜4/26(金)</p><p>通常営業</p></li><li><p>4/27(土)</p><p>9:00 〜 11:30</p></li><li><p>4/28(日), 4/29(月)</p><p>休業</p></li><li><p>4/30(火), 5/1(水)</p><p>通常営業</p></li><li><p>5/2(木)</p><p>9:00〜14:00</p></li><li><p>5/3(金)〜5/6(月)</p><p>休業</p></li><li><p>5/7(火)〜</p><p>通常営業</p></li></ul><br /><br />冷凍での対応もいたしていますので、必要の際はお申しつけください。'
  },
  {
    id: 1,
    title: 'ホームページを開設しました！',
    date: { year: 2024, month: 4, day: 10, week: '水'},
    desc: 'いつもブッチャー丸幸をご愛顧いただきまして、ありがとうございます。<br /><br />この度ホームページを開設いたしました。<br />ご質問が多かった注文方式やメニューなどを記載しておりますので、ご確認ください。<br />また、皆様のお役に立てる情報を不定期ではありますが更新していきますので、ご覧いただけますと幸いです。'
  },
]

export default news;