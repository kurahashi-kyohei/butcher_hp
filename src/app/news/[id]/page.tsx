'use client';

import { NextPage } from 'next';
import { usePathname } from 'next/navigation'; 
import Mv from '@/app/components/news/mv';
import NewsDetailContainer from '@/app/components/news/main/newsDetailContainer';

const NewsDetail: NextPage = () => {
  const path = usePathname();

  return (
    <div>
      <Mv />
      <NewsDetailContainer path={path || ''} />
    </div>
  )
}

export default NewsDetail;
