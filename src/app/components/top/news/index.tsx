import Style from './index.module.scss';
import news from '@/app/data/news';
import Link from 'next/link';

const News = () => {
  return (
    <div className={Style.news}>
      <h2>新着情報</h2>
      <div className={Style.container}>
        {news.map((news, index) => {
          return(
            <Link key={index} href={`/news/${news.id}`} className={Style.item}>
              <h4>{news.date?.year}年{news.date?.month}月{news.date?.day}日 ({news.date?.week})</h4>
              <h3>{news.title}</h3>
            </Link>
          )
        })}
      </div>
      <Link href="/news" className={Style.button}>
         <span>新着情報一覧へ</span>
      </Link>
    </div>
  )
}

export default News;