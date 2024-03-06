import type { NextPage, Metadata } from 'next';
import Head from 'next/head';
//components
import Mv from '../components/menu/mv';

export const metadata: Metadata = {
  title: "Menu | ブッチャー丸幸",
  description: "北海道札幌市豊平区にある精肉店です。",
};

const menu: NextPage = () => {
  return (
    <div>
        <Mv />
    </div>
  )
}

export default menu;
