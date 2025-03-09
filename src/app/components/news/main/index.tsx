// Server Component
import { getNewsList } from '../../../../../lib/client';
import { NewsListView } from './NewsListView';
import { cache } from 'react';
import { unstable_noStore as noStore } from 'next/cache';

// データフェッチを最適化
const getNewsListCached = cache(async () => {
  noStore(); // キャッシュを無効化
  try {
    const data = await getNewsList();
    return data || []; // データがnullやundefinedの場合は空配列を返す
  } catch (error) {
    console.error('Failed to fetch news:', error);
    return []; // エラー時は空配列を返す
  }
});

export default async function Main() {
  const newsList = await getNewsListCached();
  
  // 型安全性とエラー防止のためのチェック
  if (!Array.isArray(newsList)) {
    console.error('News list is not an array:', newsList);
    return <div>データの取得に失敗しました。</div>;
  }

  return <NewsListView newsList={newsList} />;
}