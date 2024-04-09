import React from 'react';
import Style from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { pickupRanking } from '@/app/data/merchandises';



const Menu: React.FC = () => {
  return (
    <div className={Style.menu}>
      <h2>メニュー</h2>
      <div className={Style.container}>
        <div className={Style.text}>
          <div className={Style.pickup}>
            <h3>おすすめランキング</h3>
            <div className={Style.ranking}>
              {pickupRanking.map((merchandise, index) => {
                return(
                  <div key={index} className={Style.merchandise}>
                    <h4>{merchandise.ranking}位</h4>
                    <div>
                    <div className={Style.title} dangerouslySetInnerHTML={{ __html: merchandise.title }}></div>
                      <p className={Style.price}>{merchandise.price}円</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <Link href="/menu" className={Style.button}>
            <span>メニュー一覧へ</span>
          </Link>
        </div>
        <div className={Style.img_wrapper}>
          <Image src='/top/menu/menu_image.webp' alt='メニューイメージ' className={Style.img} layout='fill' objectFit='contain'/>
        </div>
      </div>
    </div>
  )
}

export default Menu
