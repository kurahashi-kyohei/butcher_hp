import Style from './index.module.scss';
import { GoogleMapsEmbed } from '@next/third-parties/google';

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
        <p>・中央バス 「西岡1条3丁目」 バス停より徒歩5分</p>
        <p>・地下鉄南北線 「南平岸」 駅より徒歩20分</p>
        <p>・駐車場 5台</p>
      </div>
    </div>
  )
}

export default Main;