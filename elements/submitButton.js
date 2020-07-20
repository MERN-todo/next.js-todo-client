export default function SubmitButton ({ disabled }) {
  return disabled ? (
    <button
      disabled
      type='submit'
      className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed'
    >
      Submit
    </button>
  ) : (
    <button
      type='submit'
      className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
    >
      Submit
    </button>
  )
}
