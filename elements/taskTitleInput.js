export default function TaskTitleInput ({ value, onChange }) {
  return (
    <input
      type='text'
      className='text-center bg-gray-300 py-4 rounded'
      placeholder='Add task'
      value={value}
      onChange={onChange}
    />
  )
}
