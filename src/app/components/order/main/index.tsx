import Style from './index.module.scss';
import Calendar from '../../parts/calendar';
import Link from 'next/link';

const Main = () => {
  return (
    <div className={Style.order}>
      <h2>ご注文はこちらから</h2>
      <div className={Style.link}>
        <div className={Style.telephone_number}>
          <p>電話番号 : </p>
          <a href='tel:011-851-6398'>(011)-851-6398</a>
        </div>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSclJ9UPwCFGLKTX1RCSQ0s0Wv-ek9kUh4YIWC0ev93WlQXmWQ/viewform'>ご注文フォーム</a>
      </div>

      <h2>ご注文について</h2>
      

      <div className={Style.desc}>
        <p>お電話、FAX、ご注文フォームからの注文受付、<br className={Style.sp_only}/>その後店頭でのお支払い・受け取りとなります。</p>
        <p>お支払い方法は現金のみとさせていただきます。</p>
        <p>電話での当日対応は30分前までとさせていただいております。</p>
        <p>ご注文フォーム、FAXでのご注文は原則前日までのご対応とさせていただきます。</p>
        <p>品切れがある場合がございます。<br className={Style.sp_only}/>ご了承ください。</p>
        <p>受け取り時間は営業時間内、平日の11時〜13時は受け取り不可ですので、<br className={Style.sp_only}/>お気をつけください。</p>
      </div>
      <h3>お客様の笑顔のため、誠心誠意、真心を込めてお作りいたします。</h3>

      
    </div>
  )
}

export default Main
