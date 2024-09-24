import Style from './index.module.scss';
import Link from 'next/link';

const Order = () => {
  return (
    <div className={Style.order}>
      <h2>ご注文につきまして</h2>
      <div className={Style.desc}>
        <p>お電話、FAX、ご注文フォームでの注文受付、<br className={Style.sp_only}/>その後店頭でのお支払い・受け取りとなります。</p>
        <p>お支払い方法は現金のみとさせていただきます。</p>
        <p>電話での当日対応は30分前までとさせていただいております。</p>
        <p>ご注文フォーム、FAXでのご注文は原則前日までのご対応とさせていただきます。</p>
        <p>品切れがある場合がございます。<br className={Style.sp_only}/>ご了承ください。</p>
        <p>受け取り時間は営業時間内、平日の11時〜13時は受け取り不可ですので、<br className={Style.sp_only}/>お気をつけください。</p>
      </div>
      <h3>お客様の笑顔のため、誠心誠意、真心を込めてお作りいたします。</h3>
      <Link href="/schedule" className={Style.button}>
          <span>ご注文・ご予約詳細へ</span>
      </Link>
    </div>
  )
}

export default Order;