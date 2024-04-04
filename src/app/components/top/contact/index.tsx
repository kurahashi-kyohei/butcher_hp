import Style from './index.module.scss';
import Link from 'next/link';


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
      <Link href="/contact" className={Style.button}>
        <span>お問い合わせ詳細へ</span>
      </Link>
    </div>
  )
}

export default Contact;
