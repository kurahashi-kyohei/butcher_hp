import type { NextPage, Metadata } from 'next';
import { Suspense } from 'react';
//components
import Mv from '../components/menu/mv';
import Main from '../components/menu/main';
import { useSearchParams } from 'next/navigation';

function Search() {
  const searchParams = useSearchParams();

  return <input placeholder="Search..." />;
}

export const metadata: Metadata = {
  title: "ブッチャー丸幸 | メニュー",
  description: "北海道札幌市豊平区にある精肉店です。",
};

const menu: NextPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Mv />
        <Main />
    </Suspense>
  )
}

export default menu;
