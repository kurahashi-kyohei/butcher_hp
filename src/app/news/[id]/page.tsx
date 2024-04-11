import { NextPage } from 'next';
import { usePathname } from 'next/navigation'; 
import Mv from '@/app/components/news/mv';
import NewsDetailContainer from '@/app/components/news/main/newsDetailContainer';
import news from '@/app/data/news';

export async function generateStaticParams(): Promise<any[]> {
  return news.map((news) => ({
    id: news.id.toString(),
  }))
}

const NewsDetail = () => {
  const path = usePathname();

  return (
    <>
      <Mv />
      <NewsDetailContainer path={path || ''} />
    </>
  )
}

export default NewsDetail;
