import { serverUrl } from '../config'

async function submitNewTask (newTask) {
  const res = await fetch(`${serverUrl}/api/v1/tasks`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask)
  })
  return res.json()
}

async function deleteTask (_id) {
  await fetch(`${serverUrl}/api/v1/tasks/${_id}`, {
    method: 'delete'
  })
}

async function putTask (_id, newTask) {
  const res = await fetch(`${serverUrl}/api/v1/tasks/${_id}`, {
    method: 'put',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask)
  })
  return res.json()
}

module.exports = {
  deleteTask,
  submitNewTask,
  putTask
}
