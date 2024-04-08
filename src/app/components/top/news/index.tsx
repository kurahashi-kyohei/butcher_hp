import Style from './index.module.scss';
import news from '@/app/data/news';
import Link from 'next/link';

const News = () => {
  return (
    <div className={Style.news}>
      <h2>新着情報</h2>
      <div className={Style.container}>
        {[...Array(3)].map((_, i) => (
          news[i] ? 
          <Link key={i} href={`/news/${news[i].id}`} className={Style.item}>
            <h4>{news[i].date?.year}年{news[i].date?.month}月{news[i].date?.day}日 ({news[i].date?.week})</h4>
            <h3>{news[i].title}</h3>
          </Link>
          : ''
        ))}
      </div>
      <Link href="/news" className={Style.button}>
         <span>新着情報一覧へ</span>
      </Link>
    </div>
  )
}

export default News;