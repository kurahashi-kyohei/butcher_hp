import Style from './index.module.scss';
import news from '@/app/data/news';

const NewsDetailContainer: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div className={Style.news_detail}>
      {news.map((news, index) => {
        return(
          (`/news/${news.id}` === path)
          ?
          <div className={Style.item}>
            <div className={Style.title}>
              <h2>{news.title}</h2>
              <h3>{news.date?.year}年{news.date?.month}月{news.date?.day}日 ({news.date?.week})</h3>
            </div>
            <div className={Style.text}>
              <div className={Style.desc} dangerouslySetInnerHTML={{ __html: news.desc }}></div>
              <div className={Style.writer}>
                <p>{news.writer}</p>
              </div>
            </div>
            
          </div>
          : ''
        )
      })}
    </div>
  )
}

export default NewsDetailContainer;
