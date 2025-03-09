'use client';

import Link from 'next/link';
import Style from './index.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { memo } from 'react';

type News = {
  id: string;
  date: string;
  title: string;
};

// 個別のニュースアイテムをメモ化
const NewsItemComponent = memo(({ news, index, inView }: {
  news: News;
  index: number;
  inView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={inView ? { opacity: 1 } : { opacity: 0 }}
    transition={{ delay: index * 0.05 }}
  >
    <motion.div
      whileHover={{ 
        backgroundColor: "rgba(0, 0, 0, 0.02)"
      }}
      transition={{ duration: 0.2 }}
    >
      <Link 
        href={`/news/${news.id}`} 
        className={Style.item}
        prefetch={false}
        aria-label={`${news.date}の記事: ${news.title}`}
      >
        <time dateTime={news.date}>{news.date}</time>
        <motion.h3
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {news.title}
        </motion.h3>
      </Link>
    </motion.div>
  </motion.div>
));

NewsItemComponent.displayName = 'NewsItemComponent';

export const NewsListView = memo(({ newsList }: { newsList: News[] }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={Style.news}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        新着情報一覧
      </motion.h2>
      <motion.div
        className={Style.container}
        ref={ref}
      >
        <AnimatePresence>
          {newsList.map((news, index) => (
            <NewsItemComponent
              key={news.id}
              news={news}
              index={index}
              inView={inView}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
});

NewsListView.displayName = 'NewsListView'; 