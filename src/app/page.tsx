'use client';

import type { NextPage } from 'next';
import Mv from './components/top/mv';
import News from './components/top/news';
import Menu from './components/top/menu';
import Schedule from './components/top/schedule';
import Access from './components/top/access';


const Top: NextPage = () => {
  return (
    <>
      <Mv />
      <News />
      <Menu />
      <Schedule />
      <Access />
    </>
  )
}

export default Top