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
    id: 1,
    title: 'ホームページを開設しました！',
    date: { year: 2024, month: 4, day: 7, week: '月'},
    desc: 'いつもブッチャー丸幸をご愛好いただきまして、ありがとうございます。<br /><br />この度ホームページを開設いたしました。<br />ご質問が多かった注文方式やメニューなどを記載しておりますので、ご確認ください。<br />また、皆様のお役に立てる情報を不定期ではありますが更新していきますので、ご覧いただけますと幸いです。'
  },
]

export default news;