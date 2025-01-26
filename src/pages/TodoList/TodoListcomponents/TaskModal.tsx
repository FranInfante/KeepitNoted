import { useState } from "react";

type Task = { task: string; completed: boolean };

type TaskModalProps = {
  tasks: Task[];
  listName: string;
  closeModal: () => void;
  updateTasks: (tasks: Task[]) => void;
};

function TaskModal({
  tasks,
  listName,
  closeModal,
  updateTasks,
}: TaskModalProps) {
  const [newTaskContent, setNewTaskContent] = useState("");

  const addTask = () => {
    if (!newTaskContent.trim()) return;
    updateTasks([...tasks, { task: newTaskContent, completed: false }]);
    setNewTaskContent("");
  };

  const toggleTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    updateTasks(updatedTasks);
  };

  const removeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    updateTasks(updatedTasks);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-gray-800 opacity-75"
        onClick={closeModal}
      ></div>
      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full z-10">
        <h2 className="text-xl font-bold mb-4">{listName} To-Do List</h2>
        <div className="mb-4">
          <label htmlFor="task" className="block text-gray-700 font-bold mb-2">
            Task
          </label>
          <input
            type="text"
            id="task"
            className="w-full px-3 py-2 border rounded mb-4 text-gray-900"
            placeholder="Enter a task..."
            value={newTaskContent}
            onChange={(e) => setNewTaskContent(e.target.value)}
          />
          <button
            className="w-full bg-yellow-400 text-indigo-900 font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`p-4 border rounded-2xl shadow-md mb-4 ${
                task.completed ? "bg-green-100" : "bg-indigo-600 text-white"
              } flex justify-between items-center`}
            >
              <div
                className="cursor-pointer flex-grow"
                onClick={() => toggleTask(index)}
              >
                <p className={`${task.completed ? "line-through" : ""}`}>
                  {task.task}
                </p>
              </div>
              {task.completed && (
                <button
                  className="ml-4 text-red-500 hover:text-red-700 cursor-pointer"
                  onClick={() => removeTask(index)}
                >
                  ✖
                </button>
              )}
            </li>
          ))}
        </ul>
        <button
          className="w-full mt-4 bg-red-500 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default TaskModal;
