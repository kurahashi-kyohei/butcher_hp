import Style from './index.module.scss';
import Link from 'next/link';


const Contact = () => {
  return (
    <div className={Style.contact}>
      <h2>お問い合わせ</h2>
      <div className={Style.text}>
      <p>ご購入の際、何かご不明点がございましたら、こちらの電話番号・FAX・メール、またはお問い合わせフォームまでお問い合わせください。<br />営業時間外・定休日・祝日は対応しかねます。</p>

      <div className={Style.link}>
          <div className={Style.telephone_number}>
            <p>電話番号 : </p>
            <a href='tel:011-851-6398'>(011)-851-6398</a>
          </div>
          <p>FAX : 851-0815</p>
          <p>メール : buchermarukou@outlook.jp</p>
          <a href='https://docs.google.com/forms/d/1mHz5p091_2qVSYbMUUZwqd9pyfw4fUMVdQgLKhwf9E8/edit?pli=1'>お問い合わせフォーム</a>
        </div>
      </div>

      <Link href="/contact" className={Style.button}>
        <span>お問い合わせ詳細へ</span>
      </Link>
    </div>
  )
}

export default Contact;
