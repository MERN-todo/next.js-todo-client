import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

moment.locale('en-GB')
const localizer = momentLocalizer(moment)

export default function TaskCalendar ({ tasks }) {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={tasks}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        selectable
      />
    </div>
  )
}
