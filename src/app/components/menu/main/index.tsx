import Style from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { merchandises, pickupRanking } from '@/app/data/merchandises';
import categories from '@/app/data/category';

const Main: React.FC = () => {
  return (
    <div className={Style.main}>
      <div className={Style.download}>
        <a href="https://drive.google.com/file/d/1gFP6HocK-_DFtJXmiiIlR2j4N3gXEVZw/view?usp=drivesdk">メニューのダウンロードはこちらから</a>
      </div>
      <div className={Style.note}>
        <p>お肉の厚さ、切り方、味付けはご希望通りにいたします。</p>
        <p>3,000円以上ご購入された方は鶏皮(味付)1pサービスいたします。</p>
        <p>下記の価格は税込価格です。</p>
      </div>

      <div className={Style.category_wrapper}>
        <h3>カテゴリー別</h3>
        <div className={Style.categories}>
          {categories.map((category, index) => {
            return (
              <Link key={index} href={category.href} className={Style.category}>
                <h4>{category.title}</h4>
              </Link>
            );
          })}
        </div>
      </div>

      <div className={Style.pickup}>
        <h3>スタッフが選んだベスト５</h3>
        <div className={Style.ranking}>
          {pickupRanking.map((merchandise, index) => {
            return(
              <div key={index} className={Style.merchandise}>
                <div className={Style.title}>
                  <h4>{merchandise.ranking}位</h4>
                  <div dangerouslySetInnerHTML={{ __html: merchandise.title }}></div>
                </div>
                <div className={Style.price}>
                  <p>{merchandise.amount}</p>
                  <p>{merchandise.price}円</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className={Style.all}>
        <h3>商品一覧</h3>
        <div className={Style.container}>
          {categories.map((category, index) => {
            return(
              <div key={index} className={Style.category}>
                <h4>{category.title}</h4>
                {merchandises.map((merchandise, index) => {
                  return(
                    (`/menu/${merchandise.category}` === category.href)
                    ?
                    <div key={index} className={Style.merchandise}>
                      <div className={Style.title} dangerouslySetInnerHTML={{ __html: merchandise.title }}></div>
                      <p className={Style.price}>{merchandise.price}円（税込）</p>
                    </div>
                    : ''
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* <div className={Style.note}>
          <p>※ 3000円以上ご購入の方 鶏皮味付き 1pサービス致します。</p>
          <p>※ 上記の価格は、税込価格です。</p>
          <p>※肉相場変動により価格がたまに変わります</p>
      </div> */}
    </div>
  )
}

export default Main
