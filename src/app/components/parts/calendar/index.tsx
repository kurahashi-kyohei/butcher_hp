'use client';

import ThisMonth from './thisMonth';
import NextMonth from './nextMonth';
import { useState, useEffect } from 'react';

const Calendar = () => {
  const [day, setDay] = useState(new Date());
  useEffect(() => {
    setDay(new Date());
  }, []);

  return (
    <div>
      <ThisMonth />
      {day.getDate() > 19 && <NextMonth />}
    </div>
  );
};

export default Calendar; 