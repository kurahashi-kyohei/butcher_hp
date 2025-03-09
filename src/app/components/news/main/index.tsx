import { getNewsList } from '../../../../../lib/client';
import { NewsListView } from './NewsListView';


export default async function Main() {
  const newsList = await getNewsList();

  return <NewsListView newsList={newsList} />;
}