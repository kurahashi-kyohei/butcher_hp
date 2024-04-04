'use client';

import Style from './index.module.scss';
import Image from 'next/image';

const Main = () => {
  return (
    <div className={Style.main}>
      <div className={Style.img_wrapper}>
        <Image  src='/contact/main/store.jpeg' alt='店舗風景' layout='fill' objectFit='cover'/>
      </div>
      <div className={Style.text}>
        <h2>ブッチャー丸幸へ問い合わせ</h2>
        <p>ご購入の際、何かご不明点がございましたら、こちらの電話番号までお問い合わせください。<br />営業時間外・定休日・祝日は対応しかねます。</p>

        <div className={Style.telephone_number}>
          <a href='tel:851-6398'>電話番号 : 851-6398</a>
          <h4>FAX : 851-0815</h4>
        </div>
      </div>
    </div>
  )
}

export default Main
