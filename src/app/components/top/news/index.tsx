import type { News } from '../../../../../lib/client';
import { getNewsList } from '../../../../../lib/client';
import Style from './index.module.scss';
import Link from 'next/link';

const News = async () => {
  const newsList = await getNewsList();

  return (
    <div className={Style.news}>
      <h2>新着情報</h2>
      <div className={Style.container}>
        {[...Array(3)].map((_, i) => (
          newsList[i] ?
            <Link key={newsList[i].id} href={`/news/${newsList[i].id}`} className={Style.item}>
              <h4>{newsList[i].date}</h4>
              <h3>{newsList[i].title}</h3>
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