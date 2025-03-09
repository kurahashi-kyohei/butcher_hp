// Server Component
import { getNewsList } from '../../../../../lib/client';
import { NewsListView } from './NewsListView';
import { cache } from 'react';

// データフェッチを最適化
const getNewsListCached = cache(getNewsList);

export default async function Main() {
  const newsList = await getNewsListCached();
  return <NewsListView newsList={newsList} />;
}