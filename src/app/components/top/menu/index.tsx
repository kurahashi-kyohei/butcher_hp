'use client';

import React from 'react';
import Style from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { pickupRanking } from '@/app/data/merchandises';



const Menu: React.FC = () => {
  // const [isFadeIn, setIsFadeIn] = useState<boolean>(false);
  const [isSlide, setIsSlide] = useState<boolean>(false);

  const toggleAnimation = () => {
    // window.scrollY > 5 ? setIsFadeIn(true) : '';
    window.scrollY > 120 ? setIsSlide(true) : '';
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleAnimation);
    return () => window.removeEventListener("scroll", toggleAnimation);
  }, []);

  return (
    <div className={Style.menu}>
      <div className={Style.text}>
        <h2>メニュー</h2>
          <div className={Style.pickup}>
            <h3>おすすめランキング</h3>
            <div className={Style.ranking}>
              {pickupRanking.map((item, index) => {
                return(
                  <div key={index} className={Style.merchandise}>
                    <h4>{item.ranking}位</h4>
                    <div>
                      <p>{item.title}</p>
                      <p className={Style.price}>{item.price}円</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <Link href="/menu" className={Style.button}>
            <span>商品メニュー一覧へ</span>
          </Link>
      </div>
      <div className={isSlide ? `${Style.img_wrapper} ${Style.slide}` : `${Style.img_wrapper}`}>
        <Image src='/top/menu/menu_image.jpg' alt='メニューイメージ' className={Style.img} layout='fill' objectFit='contain'/>
      </div>
    </div>
  )
}

export default Menu
