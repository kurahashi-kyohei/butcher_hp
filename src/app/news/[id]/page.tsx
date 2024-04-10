'use client';

import { NextPage, Metadata } from 'next';
import { usePathname } from 'next/navigation'; 
import Mv from '@/app/components/news/mv';
import NewsDetailContainer from '@/app/components/news/main/newsDetailContainer';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function Search() {
  const searchParams = useSearchParams();

  return <input placeholder="Search..." />;
}

const NewsDetail: NextPage = () => {
  const path = usePathname();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Mv />
      <NewsDetailContainer path={path || ''} />
    </Suspense>
  )
}

export default NewsDetail;
