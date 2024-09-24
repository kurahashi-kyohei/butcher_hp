'use client';

import Style from './index.module.scss';
import Image from 'next/image';

const Main = () => {
  return (
    <div className={Style.main}>
      <div className={Style.text}>
        <h2>ブッチャー丸幸へ問い合わせ</h2>
        <p>ご購入の際や、お肉のことで何かご不明点・ご相談等ございましたら、こちらの電話番号・FAX・メール、またはお問い合わせフォームまでお問い合わせください。<br />営業時間外・定休日・祝日は対応しかねます。</p>
        <div className={Style.link}>
          <div className={Style.telephone_number}>
            <p>電話番号 : </p>
            <a href='tel:011-851-6398'>(011)-851-6398</a>
          </div>
          <p>FAX : 851-0815</p>
          <p>メール : buchermarukou@outlook.jp</p>
          <a href='https://docs.google.com/forms/d/1mHz5p091_2qVSYbMUUZwqd9pyfw4fUMVdQgLKhwf9E8/edit?pli=1'>お問い合わせフォーム</a>
        </div>
      </div>
    </div>
  )
}

export default Main
