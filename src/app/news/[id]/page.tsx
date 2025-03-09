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