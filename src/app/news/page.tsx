import { NextPage, Metadata } from 'next';
import Mv from '../components/news/mv';
import Main from '../components/news/main';

export const metadata: Metadata = {
  title: "ブッチャー丸幸 | 新着情報",
  description: "北海道札幌市豊平区にある精肉店です。",
};

const News: NextPage = () => {
  return (
    <>
      <Mv />
      <Main />
    </>
  )
}

export default News;