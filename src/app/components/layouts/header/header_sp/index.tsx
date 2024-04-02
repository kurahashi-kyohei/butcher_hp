"use client"

import Link from 'next/link';
import Image from 'next/image';
import Style from './index.module.scss'
import { useState, useEffect } from 'react';
import { Hina_Mincho } from 'next/font/google';

const mincho = Hina_Mincho({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const HeaderSp = () => {
  const headerItem = [
    {
      title: "HOME",
      href: "/"
    },
    {
      title: "NEWS",
      href: "/news"
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
    },
    {
      title: "ABOUT",
      href: "/about"
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

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    isOpen == false ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <>
      <header className={Style.header}>
        <nav>
          <div className={Style.title}>
            <Link href="/" className={Style.title}>
              <Image src="/global/icon.svg" alt="アイコン" className={Style.icon} width={30} height={30} />
              <h1 className={`${Style.company} ${mincho.className}`}>ブッチャー丸幸</h1>
            </Link>
          </div>
          <div className={isOpen ? `${Style.button} ${Style.cross}` : `${Style.button}` } onClick={handleOpen}>
            <span></span><span></span><span></span>
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



