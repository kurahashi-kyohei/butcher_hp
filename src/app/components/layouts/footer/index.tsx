'use client';

import React from 'react';
import Link from 'next/link';
import Style from './index.module.scss';
import { Link as Scroll } from 'react-scroll';

const Footer = () => {
  const footerItem = [
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
    <footer className={Style.footer}>
      <div className={Style.line}></div>
      <div className={Style.menu}>
          {footerItem.map((item, index) => {
            return (
              <Link key={index} href={item.href} className={Style.item}>
                <span>{item.title}</span>
              </Link>
            );
          })}
      </div>
      <a href="#mv">
        <div className={Style.button}>
          TOP
        </div>
      </a>
      {/* <Scroll to="mv" smooth={true} offset={-30}>
        <div className={Style.button}>
          TOP
        </div>
      </Scroll> */}
      <p>© 2024 ブッチャー丸幸</p>
    </footer>
  );
};

export default Footer;