"use client";

import { SetStateAction, useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [liveInput, setLiveInput] = useState("");
  const [toggleColor, setToggleColor] = useState(false);

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleLiveInput = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setLiveInput(event.target.value);
  };

  const handleToggleColor = () => {
    setToggleColor((prev) => !prev);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleTaskInputValue = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTask(event.target.value);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-300">
      <div className="w-75 h-37.5 flex flex-col bg-white rounded-[10px] mt-10">
        <p className="text-black font-medium text-2xl">This is task #1</p>

        <p className="text-black font-medium text-2xl">
          current count is: {count}
        </p>

        <button
          onClick={handleIncrement}
          className="w-15 h-7.5 rounded-[20px] cursor-pointer bg-green-400 hover:bg-green-800 text-white"
        >
          PLUS ONE
        </button>

        <button
          onClick={handleReset}
          className="w-15 h-7.5 rounded-[20px] cursor-pointer bg-red-400 hover:bg-red-800 text-white"
        >
          RESET
        </button>
      </div>

      <div className="w-75 h-37.5 flex flex-col bg-white rounded-[10px] mt-10">
        <p className="text-black font-medium text-2xl">
          This is task #2 Show&Hide
        </p>

        <button
          onClick={handleToggle}
          className="w-15 h-7.5 rounded-[20px] cursor-pointer bg-green-400 hover:bg-green-800 text-white"
        >
          {toggle ? "HIDE" : "SHOW"}
        </button>

        {toggle && (
          <p className="text-black font-medium text-2xl">
            This content is visible.
          </p>
        )}
      </div>

      <div className="w-75 h-37.5 flex flex-col bg-white rounded-[10px] mt-10">
        <p className="text-black font-medium text-2xl">This is task #3</p>

        <input
          type="text"
          className="w-50 h-12.5 rounded-[5px] border-2 px-5"
          placeholder="write something..."
          onChange={handleLiveInput}
        />

        <p className="text-black font-medium text-2xl">
          Here we have input text in live: {liveInput}
        </p>
      </div>

      <div className="w-75 h-37.5 flex flex-col bg-white rounded-[10px] mt-10">
        <p className="text-black font-medium text-2xl">This is task #4</p>
        <button
          onClick={handleToggleColor}
          className="w-auto h-7.5 rounded-[20px] cursor-pointer bg-green-400 hover:bg-green-800 text-white"
        >
          {toggleColor ? "MAKE IT GRAY" : "MAKE IT ORANGE"}
        </button>

        <div
          className={`w-15 h-15 rounded-full ${
            !toggleColor ? "bg-gray-400" : "bg-orange-400"
          }`}
        ></div>
      </div>

      <div className="w-75 h-37.5 flex flex-col bg-white rounded-[10px] mt-10 mb-10">
        <p className="text-black font-medium text-2xl">This is task #5 TODO!</p>

        <div className="flex gap-1 px-1">
          <input
            type="text"
            value={task}
            className="w-50 h-7 rounded-[5px] border-2 px-5"
            placeholder="write something..."
            onChange={handleTaskInputValue}
          />

          <button
            onClick={handleAddTask}
            className="flex justify-center items-center w-15 h-7 bg-green-400 hover:bg-green-800 text-white text-2xl font-bold rounded-[5px]"
          >
            +
          </button>
        </div>

        <ul className="px-5 overflow-y-auto">
          {tasks.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
