import Style from './index.module.scss';
import { GoogleMapsEmbed } from '@next/third-parties/google';
import Image from 'next/image';

const Main = () => {
  return (
    <div className={Style.main}>
      <div className={Style.map}>
        <GoogleMapsEmbed
        apiKey="AIzaSyBbuEaGef9u_m4a2ZRLkZeGWE21vQ_Nv6I"
        height={400}
        width="100%"
        mode="place"
        q="〒062-0031 北海道札幌市豊平区西岡１条３丁目１０−５"
        />
      </div>
      <div className={Style.text}>
        <p>住所 : 〒062-0031　北海道札幌市豊平区西岡1条3丁目10-5</p>
        <p>中央バス 「西岡1条3丁目」 バス停より徒歩5分</p>
        <p>地下鉄南北線 「南平岸」 駅より徒歩20分</p>
        <p>駐車場 3〜4台</p>
      </div>

      <div className={Style.img_wrapper}>
        <Image src='/access/main/parking.webp' alt='駐車場イメージ' className={Style.img} layout='fill' objectFit='contain'/>
      </div>
    </div>
  )
}

export default Main;