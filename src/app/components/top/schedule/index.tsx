import React from 'react';
import Style from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Calendar from '../../parts/calendar';
import { satisfy } from '@/app/styles/font';

const Schedule = () => {
  return (
    <div className={Style.schedule}>
      <div className={Style.img_box}>
        <Image src='/top/schedule/schedule.jpeg' alt='' className={Style.img} layout='fill' objectFit='contain'/>
      </div>
      <div className={Style.container}>
        <h1 className={satisfy.className}>Schedule</h1>
        <Calendar />
        <div className={Style.desc}>
            <p>：定休日</p>
            <p>営業時間（10:30〜19:00）</p>
          </div>
        <Link href="/schedule" className={Style.button}>
          <span>スケジュール詳細へ</span>
        </Link>
      </div>
    </div>
  )
}

export default Schedule;