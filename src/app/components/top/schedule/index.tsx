'use client';

import React from 'react';
import Style from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Calendar from '../../parts/calendar';

const Schedule: React.FC = () => {
  const [isFadeIn, setIsFadeIn] = useState<boolean>(false);
  const [isSlide, setIsSlide] = useState<boolean>(false);

  const toggleAnimation = () => {
    window.scrollY > 1500 ? setIsSlide(true) : '';
    window.scrollY > 1800 ? setIsFadeIn(true) : '';
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleAnimation);
    return () => window.removeEventListener("scroll", toggleAnimation);
  }, []);

  return (
    <div className={Style.schedule}>
      <div className={isSlide ? `${Style.img_wrapper} ${Style.slide}` : `${Style.img_wrapper}`}>
        <Image src='/top/schedule/schedule.JPG' alt='' className={Style.img} layout='fill' objectFit='contain'/>
      </div>
      <div className={Style.container}>
        <h1>Schedule</h1>
        <div className={isFadeIn ? `${Style.fadein} ${Style.calendar}` : `${Style.calendar}`}>
          <Calendar />
        </div>
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