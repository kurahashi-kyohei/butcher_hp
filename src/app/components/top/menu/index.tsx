'use client';

import React from 'react';
import Style from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Satisfy } from 'next/font/google';

const satisfy = Satisfy({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Menu = () => {
  const [isFadeIn, setIsFadeIn] = useState<boolean>(false);
  const [isSlide, setIsSlide] = useState<boolean>(false);

  const toggleAnimation = () => {
    window.scrollY > 5 ? setIsFadeIn(true) : '';
    window.scrollY > 120 ? setIsSlide(true) : '';
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleAnimation);
    return () => window.removeEventListener("scroll", toggleAnimation);
  }, []);

  return (
    <div className={Style.menu}>
      <div className={Style.text}>
        <h2 className={satisfy.className}>Menu</h2>
        <div className={isFadeIn ? Style.fadein : ''}>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。<br/>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。<br />
            テキストテキストテキストテキストテキストテキストテキスト。
          </p>
          <Link href="/menu" className={Style.button}>
            <span>商品メニュー一覧へ</span>
          </Link>
        </div>
      </div>
      <div className={isSlide ? `${Style.img_wrapper} ${Style.slide}` : `${Style.img_wrapper}`}>
        <Image src='/top/menu/menu_image.jpg' alt='メニューイメージ' className={Style.img} layout='fill' objectFit='contain'/>
      </div>
    </div>
  )
}

export default Menu
