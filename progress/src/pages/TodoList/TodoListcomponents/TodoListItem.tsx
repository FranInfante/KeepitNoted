type TodoListItemProps = {
    index: number;
    name: string;
    onOpen: (index: number) => void;
    onRemove: (index: number) => void;
  };
  
  function TodoListItem({ index, name, onOpen, onRemove }: TodoListItemProps) {
    return (
      <div className="flex items-center bg-yellow-400 text-indigo-900 font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform">
        <button className="flex-grow text-left" onClick={() => onOpen(index)}>
          {name}
        </button>
        <button
          className="ml-2 text-red-500 hover:text-red-700 cursor-pointer"
          onClick={() => onRemove(index)}
        >
          ✖
        </button>
      </div>
    );
  }
  
  export default TodoListItem;
  