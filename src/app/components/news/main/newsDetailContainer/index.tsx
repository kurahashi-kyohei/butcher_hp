// 'use client'

// import { News, getNews } from '../../../../../../lib/client';
// import { useEffect, useState } from 'react';
// import parse from 'html-react-parser';import Style from './index.module.scss';


// export default function NewsDetailContainer({ params }: { params: { slug: string } }) {
//   // お知らせ詳細の読み込み
//   const [news, setNews] = useState<News[]>();
//   useEffect(() => {
//     getNews(params.slug ?? '').then((news: News[]) => {
//       setNews(news)
//     })
//   }, [params.slug]);

//   return (
//     <div className={Style.news_detail}>
//       {news?.map((news, index) => {
//         return(
//           <div className={Style.item} key={news.id}>
//             <div className={Style.title}>
//               <h2>{news.title}</h2>
//               <h3>{news.date}</h3>
//             </div>
//             <div className={Style.text}>
//               {/* <div className={Style.desc} dangerouslySetInnerHTML={{ __html: news.desc }}></div> */}
//               {parse(news?.content ?? '')}
//             </div>
            
//           </div>
//         )
//       })}
      
//     </div>
//   )
// }
