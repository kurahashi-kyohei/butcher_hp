import Style from './index.module.scss';

const Order = () => {
  return (
    <div className={Style.order}>
      <h2>ご注文につきまして</h2>
      <div className={Style.desc}>
        <p>電話、FAXのみの注文とさせていただきます。</p>
        <p>3日前〜前日までにご注文していただけると、受け取りがスムーズになります。</p>
        <p>当日対応は2時間前までとさせていただいております。</p>
        <p>品切れがある場合がございます。<br className={Style.sp_only}/>ご了承ください。</p>
        <p>受け取り時間は営業時間内、平日の11時〜13時は受け取り不可ですので、<br className={Style.sp_only}/>お気をつけください。</p>
        <p>卸売販売も承っております。</p>
      </div>

      <h3>お客様の笑顔のため、誠心誠意、真心を込めてお作りいたします。</h3>
    </div>
  )
}

export default Order;