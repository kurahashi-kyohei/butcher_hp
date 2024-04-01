import type { NextPage, Metadata } from 'next';
//components
import Mv from '../components/menu/mv';
import Main from '../components/menu/main';

export const metadata: Metadata = {
  title: "Menu | ブッチャー丸幸",
  description: "北海道札幌市豊平区にある精肉店です。",
};

const menu: NextPage = () => {
  return (
    <div>
        <Mv />
        <Main />
    </div>
  )
}

export default menu;
