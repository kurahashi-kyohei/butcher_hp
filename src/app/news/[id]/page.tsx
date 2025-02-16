import { NextPage } from 'next';
import Mv from '@/app/components/news/mv';
import NewsDetailContainer from '@/app/components/news/main/newsDetailContainer';

interface NewsDetailPageProps {
  params: {
    id: string;
  };
}

const NewsDetail: NextPage<NewsDetailPageProps> = ({ params }) => {
  return (
    <>
      <Mv />
      <NewsDetailContainer path={params} />
    </>
  )
}

export default NewsDetail;
