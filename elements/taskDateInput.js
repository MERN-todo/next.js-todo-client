export default function TaskDateInput ({ value, onChange }) {
  return (
    <input
      type='date'
      className='text-center bg-gray-300 py-4 rounded'
      value={value}
      placeholder='yyyy-mm-dd'
      onChange={onChange}
    />
  )
}
