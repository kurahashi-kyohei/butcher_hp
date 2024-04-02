'use client';

import Style from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import LineButton from '../../parts/line_button';

// const snsItem = [
//   {
//     title: "Instagram",
//     href: "/Instagram",
//     icon: "/top/sns/instagram.svg"
//   },
//   {
//     title: "Twitter",
//     href: "/Twitter",
//     icon: "/top/sns/twitter.svg"
//   },
//   {
//     title: "Facebook",
//     href: "/Facebook",
//     icon: "/top/sns/facebook.svg"
//   },
// ];

const Main = () => {
  return (
    <div className={Style.main}>
      <div className={Style.img_wrapper}>
        <Image  src='/contact/main/store.jpeg' alt='店舗風景' layout='fill' objectFit='cover'/>
      </div>
      <div className={Style.text}>
        <h2>ブッチャー丸幸へ問い合わせ</h2>
        <p>LINE以外にも以下のSNSからのダイレクトメッセージからもお問い合わせを受け付けております。<br />SNSのフォローも大歓迎ですので、お気軽にお問い合わせ下さい。</p>
      </div>
      {/* <div className={Style.link}>
        <LineButton />
        <div className={Style.sns}>
          {snsItem.map((item, index) => {
            return(
              <Link key={index} href={item.href} className={Style.item}>
                <div className={Style.icon_wrapper}>
                  <Image src={item.icon} alt='アイコン' layout='fill' objectFit='contain'/>
                </div>
                
              </Link>
            );
          })}
        </div>
      </div> */}
    </div>
  )
}

export default Main
