import { useState } from "react";

type NewListFormProps = {
    onAdd: (name: string) => void;
  };
  
  function NewListForm({ onAdd }: NewListFormProps) {
    const [newListName, setNewListName] = useState("");
  
    const handleAdd = () => {
      onAdd(newListName);
      setNewListName("");
    };
  
    return (
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <label htmlFor="newList" className="block text-gray-700 font-bold mb-2">
          New List Name
        </label>
        <input
          type="text"
          id="newList"
          className="w-full px-3 py-2 border rounded mb-4 text-gray-900"
          placeholder="Enter a list name..."
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
        />
        <button
          className="w-full bg-yellow-400 text-indigo-900 font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
          onClick={handleAdd}
        >
          Add New List
        </button>
      </div>
    );
  }
  
  export default NewListForm;
  