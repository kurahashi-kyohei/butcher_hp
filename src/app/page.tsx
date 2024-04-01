'use client';

import type { NextPage } from 'next';
import Mv from './components/top/mv';
import Menu from './components/top/menu';
import Schedule from './components/top/schedule';
import Access from './components/top/access';
import Sns from './components/top/sns';


const Top: NextPage = () => {
  return (
    <>
      <Mv />
      <Menu />
      <Sns />
      <Schedule />
      <Access />
    </>
  )
}

export default Top