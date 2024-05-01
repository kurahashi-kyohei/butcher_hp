'use client';

import { useState } from 'react';
import Style from '../index.module.scss';

const NextMonth = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const now = currentDate;
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

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
    const isSunday = date.getDay() === 0;
    dates.unshift(<td key={`prev-${i}`} className={isSunday ? `${Style.prevMonth} ${Style.sunday}` : `${Style.prevMonth}`}>{prevMonthLastDay - i}</td>);
  }

  // 当月の日付を追加
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    const isSunday = date.getDay() === 0;
    //定休日を追加
    const closeDay = [0];
    const isCloseDay = closeDay.includes(i);

    dates.push(
      <td key={`current-${i}`} className={`${isCloseDay ? Style.close_day : ''} ${isSunday ? Style.sunday : ''}`}>{i}</td>
    );
  }

  // 次月の日付を追加するために、最終週の日数を計算
  const totalCells = dates.length + (7 - dates.length % 7) % 7;
  const nextMonthDaysToAdd = totalCells - dates.length;

  // 次月の日付を追加
  for (let i = 1; i <= nextMonthDaysToAdd; i++) {
    const date = new Date(year, month + 1, i)
    const isSunday = date.getDay() === 0;
    dates.push(<td key={`next-${i}`} className={isSunday ? `${Style.nextMonth} ${Style.sunday}` : `${Style.nextMonth}`}>{i}</td>);
  }

  let weeks = [];
  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7));
  }

  return (
    <div className={Style.calendar}>
      <div className={Style.this_month}>
        <p>{year}年 {month + 1}月</p>
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
    </div>
  )
}

export default NextMonth;