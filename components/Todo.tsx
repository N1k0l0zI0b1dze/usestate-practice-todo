"use client";
import { SetStateAction, useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("nika");
  const [tasks, setTasks] = useState(["test", "test2"]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const addInput = (event: { target: { value: SetStateAction<string> } }) => {
    setTask(event.target.value);
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((eachElement, i) => i !== index));
  };

  return (
    <div className="flex flex-row items-center h-auto w-107.5 mt-5.75">
      <div className="">
        <input
          type="text"
          placeholder="add task"
          value={task}
          onChange={addInput}
        />
        <button
          onClick={addTask}
          className="w-22 h-12.25 text-white bg-green-400"
        >
          +
        </button>
        <ul>
          {tasks.map((e, index) => (
            <li>
              {e} <button onClick={() => removeTask(index)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
