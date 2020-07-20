function serverToCalendarFormat (task) {
  return {
    ...task,
    id: task._id,
    start: new Date(task.start),
    end: new Date(task.end)
  }
}

function serverToChartFormat (tasks) {
  const taskTypes = {}
  for (const i in tasks) {
    const task = tasks[i]
    const startDate = getDay(task.start)
    if (startDate in taskTypes) {
      if (task.completed) {
        taskTypes[startDate].Complete += 1
      } else {
        taskTypes[startDate].Incomplete += 1
      }
    } else {
      taskTypes[startDate] = {
        Complete: task.completed ? 0 : 1,
        Incomplete: task.completed ? 1 : 0
      }
    }
  }
  const chartFormat = []

  for (const start in taskTypes) {
    chartFormat.push({
      date: start,
      ...taskTypes[start]
    })
  }
  return chartFormat.sort(sortByDate)
}

function getDay (dateString) {
  return dateString.split('T')[0]
}

function sortByDate (a, b) {
  return new Date(a.date) - new Date(b.date)
}

module.exports = {
  serverToCalendarFormat,
  serverToChartFormat
}
