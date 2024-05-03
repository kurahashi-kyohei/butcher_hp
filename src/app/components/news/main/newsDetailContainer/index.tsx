'use client'

import { News, getNews } from '../../../../../../lib/client';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';import Style from './index.module.scss';

interface PathProps {
  path: {
    id: string;
  };
}

export default function NewsDetailContainer({ path }: PathProps) {
  // お知らせ詳細の読み込み
  const [news, setNews] = useState<News>();
  useEffect(() => {
    getNews(path.id ?? '').then((news: News) => {
      setNews(news)
    })
  }, [path.id]);

  return (
    <div className={Style.news_detail}>
      <div className={Style.item} key={news?.id}>
        <div className={Style.title}>
          <h2>{news?.title}</h2>
          <h3>{news?.date}</h3>
        </div>
        <p className={Style.desc}>
          {parse(news?.content ?? '')}
        </p>
      </div>
    </div>
  )
}
