"use client"

import Link from 'next/link';
import Image from 'next/image';
import Style from './index.module.scss'
import { mincho } from '@/app/styles/font';

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
      title: "ご注文・ご予約",
      href: "/order"
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

  return (
    <header className={Style.header}>
      <nav>
        <div className={Style.title}>
          <Link href="/" className={Style.title}>
            <Image src="/global/icon.svg" alt="アイコン" className={Style.icon} width={50} height={50} />
            <h1 className={mincho.className}>ブッチャー丸幸</h1>
          </Link>
        </div>
        <div className={Style.menu}>
          <div className={Style.link}>
            {headerItem.map((item, index) => {
              return (
                <Link key={index} href={item.href} className={Style.item}>
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
          <div className={Style.telephone_number}>
            <a href='tel:011-851-6398'>☎︎ (011)-851-6398</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderPc;


