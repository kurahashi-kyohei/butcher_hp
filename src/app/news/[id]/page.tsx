import { getNewsList } from '../../../../lib/client';
import Mv from '@/app/components/news/mv';
import NewsDetailContainer from '@/app/components/news/main/newsDetailContainer';

export default async function NewsDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <Mv />
      <NewsDetailContainer path={id} />
    </>
  )
}

export async function generateStaticParams() {
  const posts = await getNewsList();
  
  return posts.map((post) => ({
    id: post.id.toString()
  }));
}