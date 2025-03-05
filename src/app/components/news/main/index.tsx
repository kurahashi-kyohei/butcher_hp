import { getNewsList } from '../../../../../lib/client';
import Link from 'next/link';
import Style from './index.module.scss';

export default async function Main() {
  const newsList = await getNewsList();

  return (
    <div className={Style.news}>
      <h2>新着情報一覧</h2>
      <div className={Style.container}>
        {newsList.map((news) => {
          return(
            <Link key={news.id} href={`/news/${news.id}`} className={Style.item}>
              <h4>{news.date}</h4>
              <h3>{news.title}</h3>
            </Link>
          )
        })}
      </div>
    </div>
  );
}