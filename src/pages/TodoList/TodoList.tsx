import BackToPage from "../../components/BackToPage";
import NewListForm from "./TodoListcomponents/NewListForm";
import TodoListItem from "./TodoListcomponents/TodoListItem";
import TaskModal from "./TodoListcomponents/TaskModal";
import { useEffect, useState } from "react";

function TodoList() {
  const [todoLists, setTodoLists] = useState<
    {
      name: string;
      tasks: {task: string; completed: boolean }[];
    }[]
  >([]);
  const [currentListIndex, setCurrentListIndex] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const savedLists = localStorage.getItem("todoLists");
    if (savedLists) {
      setTodoLists(JSON.parse(savedLists));
    }
  }, []);

  useEffect(() => {
    if (todoLists.length > 0) {
      localStorage.setItem("todoLists", JSON.stringify(todoLists));
    }
  }, [todoLists]);

  const addNewList = (name: string) => {
    if (!name.trim()) return;
    setTodoLists([...todoLists, { name, tasks: [] }]);
  };

  const openListModal = (index: number) => {
    setCurrentListIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setCurrentListIndex(null);
    setModalVisible(false);
  };

  const removeList = (index: number) => {
    const updatedLists = [...todoLists];
    updatedLists.splice(index, 1);
    setTodoLists(updatedLists);
  };

  const updateTasks = (
    tasks: { task: string; completed: boolean }[]
  ) => {
    if (currentListIndex !== null) {
      const updatedLists = [...todoLists];
      updatedLists[currentListIndex].tasks = tasks;
      setTodoLists(updatedLists);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-blue-700 p-6 text-white">
      <BackToPage to="/" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-300 mb-6 text-center">
          To-Do Lists
        </h1>
        <p className="text-lg text-center mb-8">
          Create and organize your tasks by category!
        </p>

        <NewListForm onAdd={addNewList} />

        {todoLists.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {todoLists.map((list, index) => (
              <TodoListItem
                key={index}
                index={index}
                name={list.name}
                onOpen={openListModal}
                onRemove={removeList}
              />
            ))}
          </div>
        )}

        {modalVisible && currentListIndex !== null && (
          <TaskModal
            tasks={todoLists[currentListIndex].tasks}
            listName={todoLists[currentListIndex].name}
            closeModal={closeModal}
            updateTasks={updateTasks}
          />
        )}
      </div>
    </div>
  );
}

export default TodoList;
