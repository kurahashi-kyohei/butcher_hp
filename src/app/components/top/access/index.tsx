import Link from 'next/link';
import Style from './index.module.scss';
import { GoogleMapsEmbed } from '@next/third-parties/google';

const Access: React.FC = () => {
  return (
    <div className={Style.access}>
      <h2>アクセス</h2>
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
        <p>〒062-0031　<br />北海道札幌市豊平区西岡1条3丁目10-5</p>
      </div>
      <Link href="/access" className={Style.button}>
          <span>アクセス詳細へ</span>
        </Link>
    </div>
  )
}

export default Access
