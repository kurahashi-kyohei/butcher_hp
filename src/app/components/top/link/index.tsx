import Style from './index.module.scss';

const Link = () => {
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
    </div>
  )
}

export default Link;