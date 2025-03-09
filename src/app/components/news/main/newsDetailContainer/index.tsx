import { News, getNews } from '../../../../../../lib/client';
import parse from 'html-react-parser';
import Style from './index.module.scss';

export default async function NewsDetailContainer({ path }: { path: string }) {
  const news: News = await getNews(path);

  return (
    <div className={Style.news_detail}>
      <div className={Style.item} key={news?.id}>
        <div className={Style.title}>
          <h2>{news?.title}</h2>
          <h3>{news?.date}</h3>
        </div>
        <div className={Style.desc}>
          {news?.content ? parse(news.content) : ''}
        </div>
      </div>
    </div>
  )
}