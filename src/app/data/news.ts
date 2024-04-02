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
    title: 'ホームページを作成しました',
    date: { year: 2024, month: 4, day: 1, week: '月'},
    desc: 'この度ブッチャー丸幸は新しくホームページを作成しました。<br /><br />テキストテキストテキストテキストテキストテキストテキストテキストテキスト。<br />テキストテキストテキストテキストテキストテキスト。'
  },
  {
    id: 2,
    title: 'メニューを更新しました',
    date: { year: 2024, month: 4, day: 2, week: '月'},
    desc: 'メニューを更新しました。'
  },
  {
    id: 3,
    title: 'スケジュールを更新しました',
    date: { year: 2024, month: 4, day: 3, week: '月'},
    desc: 'スケジュールを更新しました。'
  },
]

export default news;