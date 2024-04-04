'use client';

import type { NextPage } from 'next';
import Style from '@/app/styles/scss/module/top.module.scss';
import Mv from './components/top/mv';
import News from './components/top/news';
import Menu from './components/top/menu';
import Order from './components/top/order';
import Contact from './components/top/contact';
import Schedule from './components/top/schedule';
import Access from './components/top/access';


const Top: NextPage = () => {
  return (
    <div className={Style.top}>
      <Mv />
      <News />
      <Menu />
      <Order />
      <Contact />
      <Schedule />
      <Access />
    </div>
  )
}

export default Top