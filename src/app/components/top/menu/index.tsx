import React from 'react';
import Style from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Ranking from '@/app/components/parts/ranking';


const Menu: React.FC = () => {
  return (
    <div className={Style.menu}>
      <h2>メニュー</h2>
      <div className={Style.container}>
        <div className={Style.text}>
          <Ranking />
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
