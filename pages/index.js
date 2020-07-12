import { useState } from 'react';

export default function IndexPage() {
  const [tasks, setTasks] = useState([]);
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteText) {
      return;
    }
    const taskCopy = [...tasks];
    taskCopy.push(noteText);
    setTasks(taskCopy);
    setNoteText('');
  };

  const handleDelete = (note) => {
    const taskCopy = [...tasks];
    const index = taskCopy.indexOf(note);
    taskCopy.pop(index);
    setTasks(taskCopy);
  };

  return (
    <div className="container mx-auto">
      <div className="hero">
        <h1 className="title">Planner!</h1>
      </div>
      <form className="text-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-center bg-gray-300 py-4 rounded"
          placeholder="Add task"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
      </form>
      <div className="grid grid-cols-3 gap-4 p-4">
        {tasks.map((note) => (
          <div key={note} className="text-center p-2 flex justify-around flex-row items-center bg-gray-200 rounded">
            <div className="m-2 py-2 px-4">
              {note}
            </div>
            <div className="m-2 py-2 px-4">
              <button type="button" onClick={() => handleDelete(note)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
