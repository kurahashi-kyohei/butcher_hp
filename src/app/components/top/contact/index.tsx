import Style from './index.module.scss';


const Contact = () => {
  return (
    <div className={Style.contact}>
      <h2>お問い合わせ</h2>
      <div className={Style.text}>
        <p>ご購入の際、何かご不明点がございましたら、こちらの電話番号までお問い合わせください。<br />営業時間外は受け付けておりません。</p>
        <div className={Style.telephone_number}>
          <h4>電話番号 : 852-6398</h4>
          <h4>FAX : 851-0815</h4>
        </div>
      </div>
    </div>
  )
}

export default Contact;
