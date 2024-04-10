'use client';

import { NextPage, Metadata } from 'next';
import { usePathname } from 'next/navigation'; 
import Mv from '@/app/components/news/mv';
import NewsDetailContainer from '@/app/components/news/main/newsDetailContainer';

const NewsDetail: NextPage = () => {
  const path = usePathname();

  return (
    <>
      <Mv />
      <NewsDetailContainer path={path || ''} />
    </>
  )
}

export default NewsDetail;
