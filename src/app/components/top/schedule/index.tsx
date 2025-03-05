import Style from './index.module.scss';
import Link from 'next/link';
import Calendar from '../../parts/calendar';
import { Suspense } from "react";

const Schedule = () => {

  return (
    <div className={Style.schedule}>
      <h2>スケジュール</h2>
      <div className={Style.container}>
        <div className={Style.calendar}>
          <Suspense fallback={<>loading...</>}>
            <Calendar />
          </Suspense>
        </div>
        <div className={Style.desc}>
          <p>：定休日 (日曜日・祝日)</p>
          <div className={Style.business_hours}>
            <h4>営業時間</h4>
            <h4>月〜金曜日 : 9時〜4時30分<br />　　土曜日 : 8時〜12時</h4>
          </div>
        </div>
        <Link href="/schedule" className={Style.button}>
          <span>スケジュール詳細へ</span>
        </Link>
      </div>
    </div>
  )
}

export default Schedule;