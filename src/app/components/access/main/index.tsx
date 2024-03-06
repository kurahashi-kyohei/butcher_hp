import { GoogleMapsEmbed } from '@next/third-parties/google';
import Style from './index.module.scss';

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
      <p>西岡1条3丁目バス停より徒歩4分</p>
    </div>
  )
}

export default Main;
