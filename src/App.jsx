import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const tambah = () => {
    if (inputValue.trim())
      settodos([
        ...todos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
    setInputValue("");
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-3xl shadow-lg p-16">
          <h2 className="font-bold text-3xl text-center mb-6">To Do List</h2>
          <div className="mb-4 flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="tambah Tugas"
              className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <button
              onClick={tambah}
              className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-400"
            >
              Tambah
            </button>
          </div>
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center bg-amber-100 border border-gray-50 p-3 rounded-lg shadow-sm"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    settodos(
                      todos.map((t) =>
                        t.id === todo.id ? { ...t, completed: !t.completed } : t
                      )
                    )
                  }
                  className="mr-3 h-4 w-4 bg-amber-600"
                />
                <span
                  className={`flex-grow ${
                    todo.completed ? "line-through" : ""
                  }`}
                >
                  {todo.text}
                </span>

                <button
                  onClick={() =>
                    settodos(todos.filter((t) => t.id !== todo.id))
                  }
                  className="ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-blue-400"
                >
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
