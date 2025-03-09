'use client';

import { useEffect, useState } from 'react';
import { NewsListView } from './NewsListView';

// モックデータを直接使用
const mockNews = [
  { id: '1', date: '2024-03-01', title: 'お知らせ1' },
  { id: '2', date: '2024-03-02', title: 'お知らせ2' },
  { id: '3', date: '2024-03-03', title: 'お知らせ3' },
];

export default function Main() {
  const [newsList, setNewsList] = useState(mockNews);

  return <NewsListView newsList={newsList} />;
}