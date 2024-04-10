'use client';

import { NextPage, Metadata } from 'next';
import { usePathname } from 'next/navigation'; 
import Mv from '@/app/components/news/mv';
import NewsDetailContainer from '@/app/components/news/main/newsDetailContainer';
import { Suspense } from 'react';

const NewsDetail: NextPage = () => {
  const path = usePathname();

  return (
    <Suspense>
      <Mv />
      <NewsDetailContainer path={path || ''} />
    </Suspense>
  )
}

export default NewsDetail;
