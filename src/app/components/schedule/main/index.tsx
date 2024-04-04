import Style from './index.module.scss';
import Calendar from '../../parts/calendar';

const Main = () => {
  return (
    <div className={Style.main}>
      <div className={Style.container}>
        <div className={Style.calendar}>
          <Calendar />
        </div>
        <div className={Style.desc}>
          <p>：定休日</p>
          <div className={Style.business_hours}>
            <h4>営業時間</h4>
            <h4>月〜金曜日 : 9時〜4時30分<br />　　土曜日 : 8時〜12時</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
