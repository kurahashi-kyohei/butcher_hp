import Style from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { merchandises, pickupRanking } from '@/app/data/merchandises';
import categories from '@/app/data/category';

const Main: React.FC = () => {
  return (
    <div className={Style.main}>
      <div className={Style.pickup}>
        <h3>おすすめランキング</h3>
        <div className={Style.ranking}>
          {pickupRanking.map((item, index) => {
            return(
              <div key={index} className={Style.merchandise}>
                <h4>{item.ranking}位</h4>
                <div>
                  <p>{item.title}</p>
                  <p className={Style.price}>{item.price}円</p>
                </div>
              </div>
            )
          })}
        </div>
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

      <div className={Style.all}>
        <h3>商品一覧</h3>
        <div className={Style.merchandises}>
          {merchandises.map((merchandise, index) => {
            return(
              <div key={index} className={Style.merchandise}>
                <p>{merchandise.title}</p>
                <p className={Style.price}>{merchandise.price}円</p>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className={Style.note}>
          <p>※ 3000円以上ご購入の方 鶏皮味付き 1pサービス致します。</p>
          <p>※ 上記の価格は、税込価格です。</p>
          <p>※肉相場変動により価格がたまに変わります</p>
        </div>
    </div>
  )
}

export default Main
