// "use client";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { EventInput } from '@fullcalendar/core/index.js';
import { DayCellContentArg } from '@fullcalendar/core/index.js';
import { format } from 'date-fns';
import styled from '@emotion/styled';

const StyleWrapper = styled.div`
  .fc .fc-view-harness{
    background-color: #fff;
  }
  .fc .fc-scrollgrid {
    border-width: 0;
  }

  .fc .fc-scroller-harness {
    font-size: 20px;
    font-weight: 300;
    padding: 4px 0;
  }

  .fc .fc-scrollgrid-sync-table {
    border: 1px;
  }
  .fc .fc-daygrid-day-number {
    font-size: 12px;
  }
  .fc .fc-daygrid-day.fc-day-today {
    background-color: #ffffff00;
  }
  `

const Today = styled.div`
  color: #eb5757;
  font-size: 16px;
  font-weight: 400;
`

const events: EventInput[] = [
  {
    title: 'event sample',
    start: format(new Date(), 'yyyy-MM-dd')
  }
]

const GoogleCalendar = (): JSX.Element => {
  const renderDayCell = (e: DayCellContentArg) => {
    const { date, dayNumberText, isToday } = e
    const replaceDayNumberText = dayNumberText.replace('日', '')

    return isToday ? (
      <Today>{replaceDayNumberText}</Today>
    ) : (
      <>{replaceDayNumberText}</>
    )
  }

  return (
    <StyleWrapper>
      <FullCalendar
        locale="ja"
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        // googleCalendarApiKey= "AIzaSyD27c7XBOK_0a-1AQo-Ah2K9vTYJmcTaoI"
        // events={[
        //     { googleCalendarId: "ja.japanese#holiday@group.v.calendar.google.com" }
        // ]}
        // initialEvents={events}
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "next"
          }}
        contentHeight={"250px"}
        aspectRatio={1.6}
        businessHours={{ daysOfWeek: [1, 2, 3, 4, 5] }}
        dayCellContent={renderDayCell}
      />
    </StyleWrapper>
  );
}

export default GoogleCalendar;