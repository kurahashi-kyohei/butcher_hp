'use client';

import React from 'react';
import Link from 'next/link';
import Style from './index.module.scss';
import { Link as Scroll } from 'react-scroll';

const Footer = () => {
  const footerItem = [
    {
      title: "HOME",
      href: "/"
    },
    {
      title: "MENU",
      href: "/menu"
    },
    {
      title: "SCHEDULE",
      href: "/schedule"
    },
    {
      title: "ACCESS",
      href: "/access"
    },
    {
      title: "CONTACT",
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
      <Scroll to="mv" smooth={true} offset={-30}>
        <div className={Style.button}>
          TOP
        </div>
      </Scroll>
      <p>© 2024 ブッチャー丸幸</p>
    </footer>
  );
};

export default Footer;