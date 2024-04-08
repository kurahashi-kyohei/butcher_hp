"use client"

import Link from 'next/link';
import Image from 'next/image';
import Style from './index.module.scss'
import { useState } from 'react';
import { mincho } from '@/app/styles/font';

const HeaderSp = () => {
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

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    isOpen == false ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <>
      <header className={Style.header}>
        <nav>
          <div className={Style.text}>
            <Link href="/" className={Style.title}>
              <Image src="/global/icon.JPG" alt="アイコン" className={Style.icon} width={30} height={30} />
              <h1 className={mincho.className}>ブッチャー丸幸</h1>
            </Link>
          </div>
          <div className={Style.link}>
            <div className={Style.telephone_number}>
              <a href='tel:011-851-6398'>☎︎</a>
            </div>
            <div className={isOpen ? `${Style.button} ${Style.cross}` : `${Style.button}` } onClick={handleOpen}>
              <span></span><span></span><span></span>
            </div>
          </div>
        </nav>

        <div className={isOpen ? `${Style.menu} ${Style.open}` : `${Style.menu}`}>
        {headerItem.map((item, index) => {
          return (
            <Link key={index} href={item.href} className={Style.item}>
              <h2>{item.title}</h2>
            </Link>
          );
        })}
      </div>
      </header>
    </>
  );
};

export default HeaderSp;



