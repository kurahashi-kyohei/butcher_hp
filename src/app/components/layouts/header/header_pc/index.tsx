"use client"

import Link from 'next/link';
import Image from 'next/image';
import Style from './index.module.scss'
import { useState, useEffect } from 'react';
import { mincho, notoSerif } from '@/app/styles/font';

const HeaderPc = () => {
  const headerItem = [
    {
      title: "トップ",
      href: "/"
    },
    {
      title: "新着情報",
      href: "/news"
    },
    {
      title: "メニュー",
      href: "/menu"
    },
    {
      title: "スケジュール",
      href: "/schedule"
    },
    {
      title: "アクセス",
      href: "/access"
    },
    {
      title: "お問い合わせ",
      href: "/contact"
    }
  ];

  const [isFixed, setIsFixed] = useState<boolean>(false);

  const toggleFixed = () => {
    window.scrollY > 3 ? setIsFixed(true) : setIsFixed(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleFixed);
    return () => window.removeEventListener("scroll", toggleFixed);
  }, []);

  return (
    <header className={isFixed ? `${Style.header} ${Style.fixed}` : `${Style.header}`}>
      <nav>
        <div className={Style.title}>
          <Link href="/" className={Style.title}>
            <Image src="/global/icon.svg" alt="アイコン" className={Style.icon} width={30} height={30} />
            <h1 className={mincho.className}>ブッチャー丸幸</h1>
          </Link>
        </div>
        <div className={Style.menu}>
          {headerItem.map((item, index) => {
            return (
              <Link key={index} href={item.href} className={Style.item}>
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default HeaderPc;


