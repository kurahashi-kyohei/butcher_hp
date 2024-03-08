import { GoogleMapsEmbed } from '@next/third-parties/google';
import Image from 'next/image';
import Style from './index.module.scss';

const Main = () => {
  return (
    <div className={Style.main}>
      <div className={Style.overview}>
        <h3>店舗概要</h3>
        <table border={1}>
          <tr>
            <th>店舗名</th>
            <td>ブッチャー丸幸</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>〒062-0031<br />北海道札幌市豊平区西岡1条3丁目10-5</td>
          </tr>
          <tr>
            <th>アクセス</th>
            <td>西岡1条3丁目バス停より徒歩4分</td>
          </tr>
          <tr>
            <th>TEL</th>
            <td>0000-00-0000</td>
          </tr>
          <tr>
            <th>営業時間</th>
            <td>10:00〜20:00</td>
          </tr>
          <tr>
            <th>定休日</th>
            <td>月曜日</td>
          </tr>
        </table>
      </div>
      <div className={Style.store_image}>
        <h3>店舗画像</h3>
        <div className={Style.img_wrapper}>

          <Image src='/access/main/store_01.jpeg' alt='店舗画像' width={300} height={240}/>
          <Image src='/access/main/store_02.jpeg' alt='店舗画像' width={300} height={240}/>
          <Image src='/access/main/store_03.jpeg' alt='店舗画像' width={300} height={240}/>
          <Image src='/access/main/store_04.jpeg' alt='店舗画像' width={300} height={240}/>
        </div>
      </div>
      <div className={Style.map}>
        <h3>アクセス</h3>
        <GoogleMapsEmbed
        apiKey="AIzaSyBbuEaGef9u_m4a2ZRLkZeGWE21vQ_Nv6I"
        height={400}
        width="100%"
        mode="place"
        q="〒062-0031 北海道札幌市豊平区西岡１条３丁目１０−５"
        />
        <p>西岡1条3丁目バス停より徒歩4分</p>
      </div>
    </div>
  )
}

export default Main;
