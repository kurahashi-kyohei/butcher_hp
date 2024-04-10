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

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
 
function Search() {
  const searchParams = useSearchParams()
 
  return <input placeholder="Search..." />
}

const Top: NextPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={Style.top}>
        <Mv />
        <News />
        <Menu />
        <Order />
        <Contact />
        <Schedule />
        <Access />
      </div>
    </Suspense>
  )
}

export default Top