import Style from './index.module.scss';
import { pickupRanking } from '@/app/data/merchandises';

export default function Ranking() {
  return (
    <div className={Style.pickup}>
        <h3>昨年の売れ筋ベスト５</h3>
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
  );
}