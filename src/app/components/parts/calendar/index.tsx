import { useState } from 'react';
import Style from './index.module.scss'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const incrementMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const decrementMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const now = currentDate;
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = new Date().getDate();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startDayOfWeek = firstDay.getDay();
  const daysInMonth = lastDay.getDate();

  // 前月の日数を取得
  const prevMonthLastDay = new Date(year, month, 0).getDate();

  let dates = [];
  // 前月の日付を追加
  for (let i = 0; i < startDayOfWeek; i++) {
    const date = new Date(year, month - 1, prevMonthLastDay - i)
    const isMonday = date.getDay() === 1;
    dates.unshift(<td key={`prev-${i}`} className={isMonday ? `${Style.prevMonth} ${Style.monday}` : `${Style.prevMonth}`}>{prevMonthLastDay - i}</td>);
  }

  // 当月の日付を追加
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    const isMonday = date.getDay() === 1;
    dates.push(
      <td key={`current-${i}`} className={`${i === today ? Style.today : ''} ${isMonday ? Style.monday : ''}`}>{i}</td>
    );
  }

  // 次月の日付を追加するために、最終週の日数を計算
  const totalCells = dates.length + (7 - dates.length % 7) % 7;
  const nextMonthDaysToAdd = totalCells - dates.length;

  // 次月の日付を追加
  for (let i = 1; i <= nextMonthDaysToAdd; i++) {
    const date = new Date(year, month + 1, i)
    const isMonday = date.getDay() === 1;
    dates.push(<td key={`next-${i}`} className={isMonday ? `${Style.nextMonth} ${Style.monday}` : `${Style.nextMonth}`}>{i}</td>);
  }

  let weeks = [];
  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7));
  }

  return (
    <div className={Style.calendar}>
          <div className={Style.nav}>
            <div className={Style.prev} onClick={decrementMonth}>＜</div>
            <p>{year}年 {month + 1}月</p>
            <div className={Style.next} onClick={incrementMonth}>＞</div>
          </div>
          <table>
            <thead>
              <tr>
                <th>日</th>
                <th>月</th>
                <th>火</th>
                <th>水</th>
                <th>木</th>
                <th>金</th>
                <th>土</th>
              </tr>
            </thead>
            <tbody>
              {weeks.map((week, index) => (
                <tr key={index}>{week}</tr>
              ))}
            </tbody>
          </table>
          
        </div>
  )
}

export default Calendar
