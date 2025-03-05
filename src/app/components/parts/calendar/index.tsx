import ThisMonth from './thisMonth';
import NextMonth from './nextMonth';



const Calendar = () => {
  const day = new Date();

  return (
    <div>
      <ThisMonth />
      {
        (day.getDate() > 19)
        ? <NextMonth />
        : ''
      }
      
    </div>
  )
}

export default Calendar;