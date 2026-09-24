"use client";

import { useState } from "react";
import { Todo } from "./Todo";

const Card = () => {
  const [taskInput, setTaskInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [toggleFilter, setToggleFilter] = useState(false);

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), title: taskInput.trim(), completed: false },
      ]);
      setTaskInput("");
    }
  };

  const handleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleFilter = () => {
    setToggleFilter((prev) => !prev);
  };

  const handleFilter = (filtered: Filter) => {
    setFilter(filtered);
    setToggleFilter(false);
  };

  const total = todos.length;

  const active = todos.filter((todo) => todo.completed === false).length;

  const completed = todos.filter((todo) => todo.completed === true).length;

  let filteredTodos = todos;

  if (filter === "all") {
    filteredTodos = todos;
  }

  if (filter === "active") {
    filteredTodos = todos.filter((todo) => todo.completed === false);
  }

  if (filter === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed === true);
  }

  return (
    <div className="flex h-159 w-107.5 flex-col items-center overflow-hidden rounded-[10px] bg-white">
      <div className="flex flex-col w-full h-45 bg-linear-to-tl from-pink-500 via-red-500 to-yellow-500 rounded-t-[10px]">
        <h3 className="text-5xl text-white font-bold mt-5 ml-5">
          To-Do List 📝
        </h3>

        <div className="w-auto h-auto flex flex-row gap-5 mt-10 ml-5 relative">
          <input
            type="text"
            value={taskInput}
            onChange={(event) => setTaskInput(event.target.value)}
            placeholder="Add your to-do..."
            maxLength={40}
            className="w-50 h-10 rounded-[5px] text-white border-2 border-white outline-none px-3"
          />

          <button
            onClick={handleAddTask}
            className="w-20 h-10 rounded-[10px] cursor-pointer text-white bg-green-700 hover:bg-green-400"
          >
            ADD
          </button>

          <button
            onClick={handleToggleFilter}
            className="w-20 h-10 rounded-[10px] cursor-pointer text-white bg-gray-700 hover:bg-gray-400"
          >
            Filter
          </button>

          {toggleFilter && (
            <div className="flex flex-col w-20 h-auto absolute top-full left-80 bg-gray-700">
              <button
                onClick={() => handleFilter("all")}
                className="text-white border-b hover:bg-gray-400 cursor-pointer"
              >
                All
              </button>
              <button
                onClick={() => handleFilter("active")}
                className="text-white border-b hover:bg-gray-400 cursor-pointer"
              >
                Active
              </button>
              <button
                onClick={() => handleFilter("completed")}
                className="text-white border-b hover:bg-gray-400 cursor-pointer"
              >
                Completed
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full min-h-0 flex-1 rounded-b-[10px] px-5 pt-2 pb-2">
        <div className="w-full h-full border-2 border-gray-400 rounded-[10px] bg-white">
          <ul className="flex h-full flex-col gap-y-2 overflow-y-auto">
            {filteredTodos.map((todo, i) => (
              <li
                className={`bg-gray-50 border-b-2 border-gray-400 flex flex-row justify-between items-center px-5 py-2 ${i === 0 && "rounded-t-[10px]"} ${i === filteredTodos.length - 1 && "rounded-b-[10px]"}`}
                key={todo.id}
              >
                <span className={todo.completed ? "line-through" : ""}>
                  {todo.title}
                </span>

                <button
                  onClick={() => handleComplete(todo.id)}
                  className="w-20 h-10 rounded-[10px] cursor-pointer text-white bg-green-700 hover:bg-green-400"
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="w-20 h-10 rounded-[10px] cursor-pointer text-white bg-red-700 hover:bg-red-400"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full h-auto text-black font-medium px-5 mb-1">
        <p>Total: {total}</p>
        <p>Active: {active}</p>
        <p>Completed: {completed}</p>
      </div>
    </div>
  );
};

export default Card;
