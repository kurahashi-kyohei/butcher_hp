import React from 'react';
import Style from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Satisfy } from 'next/font/google';

const satisfy = Satisfy({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const snsItem: {title: string, href: string, icon: string}[] = [
  {
    title: "Instagram",
    href: "/Instagram",
    icon: "/top/sns/instagram.svg"
  },
  {
    title: "Twitter",
    href: "/Twitter",
    icon: "/top/sns/twitter.svg"
  },
  {
    title: "Facebook",
    href: "/Facebook",
    icon: "/top/sns/facebook.svg"
  },
];

const Sns: React.FC = () => {
  return (
    <div className={Style.sns}>
      <h2 className={satisfy.className}>SNS</h2>
      <p>新商品や、お客様にご利用頂いている様子、ブッチャー丸幸のタイムリーな情報をお届けしております</p>
      <div className={Style.container}>
        {snsItem.map((item, index) => {
          return(
            <Link key={index} href={item.href} className={Style.item}>
              <div className={Style.img_wrapper}>
                <Image src={item.icon} alt='アイコン' layout='fill' objectFit='contain'/>
              </div>
              <h3 className={satisfy.className}>{item.title}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default Sns
