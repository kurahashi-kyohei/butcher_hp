import news from "@/app/data/news";
import Link from "next/link";
import Style from './index.module.scss';

const Main = () => {
  return (
    <div className={Style.news}>
      <h2>ニュース一覧</h2>
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
    </div>
  )
}

export default Main
