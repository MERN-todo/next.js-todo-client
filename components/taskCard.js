import TaskInput from '../elements/taskInput'
import { FaCheck, FaTrashAlt } from 'react-icons/fa'

export default function TaskCard ({ task, updateTask, deleteTask }) {
  return (
    <div
      key={task.title}
      className='text-center p-2 flex justify-between flex-row items-center bg-gray-200 rounded'
    >
      <TaskInput task={task} updateTask={updateTask} />
      <div className='flex flex-row'>
        <div className='m-1 py-2 px-1'>
          <button
            type='button'
            onClick={() =>
              updateTask(task.id, {
                ...task,
                completed: !task.completed
              })
            }
            className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
          >
            <FaCheck />
          </button>
        </div>
        <div className='m-1 py-2 px-1'>
          <button
            type='button'
            onClick={() => deleteTask(task.id)}
            className='bg-red-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  )
}
