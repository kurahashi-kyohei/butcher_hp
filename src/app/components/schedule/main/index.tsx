import Style from './index.module.scss';
import Calendar from '../../parts/calendar';

const Main = () => {
  return (
    <div className={Style.main}>
      <div className={Style.calendar_wrapper}>
        <Calendar />
      </div>
    </div>
  )
}

export default Main
