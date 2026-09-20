"use client";

import { useState, type ChangeEvent } from "react";

const page = () => {
  const arr = ["React", "Javascript", "Typescript"];

  const [number, setNumber] = useState(0);
  const [togglePassword, setTogglePassword] = useState(false);
  const [countCharacters, setCountCharacters] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(["test1", "test2"]);

  const handleIncrementNumber = () => {
    setNumber(number + 1);
  };

  const handleDecrementNumber = () => {
    setNumber(number - 1);
  };

  const handleResetNumber = () => {
    setNumber(0);
  };

  const handleTogglePassword = () => {
    setTogglePassword((prev) => !prev);
  };

  const handleCountCharacters = (event: ChangeEvent<HTMLInputElement>) => {
    setCountCharacters(event.target.value.length);
  };

  const handleGetElementId = (id: number) => {
    setActiveIndex(id);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleTaskInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-300">
      <div className="w-75 h-37.5 flex flex-col bg-white rounded-[10px] mt-10">
        <h2 className="font-bold mt-5 px-2">This is number: {number}</h2>

        <div className="flex flex-row mt-1 gap-1 px-2">
          <button
            onClick={handleIncrementNumber}
            className="w-15 h-7.5 rounded-[20px] cursor-pointer bg-green-400 hover:bg-green-800 text-white"
          >
            +
          </button>
          <button
            onClick={handleDecrementNumber}
            className="w-15 h-7.5 rounded-[20px] cursor-pointer bg-green-400 hover:bg-green-800 text-white"
          >
            -
          </button>
          <button
            onClick={handleResetNumber}
            className="w-15 h-7.5 rounded-[20px] cursor-pointer bg-red-400 hover:bg-red-800 text-white"
          >
            RESET
          </button>
        </div>
      </div>

      <div className="w-75 h-37.5 flex flex-col bg-white rounded-[10px] mt-10 px-2">
        <input
          type={togglePassword ? `text` : `password`}
          placeholder="write password..."
          className="w-50 h-10 border-2 rounded-[10px] mt-2 px-2"
        />

        <button
          onClick={handleTogglePassword}
          className="w-15 h-7.5 rounded-[20px] cursor-pointer bg-red-700 hover:bg-red-400 text-white mt-2"
        >
          {togglePassword ? "HIDE" : "SHOW"}
        </button>
      </div>

      <div className="w-75 h-37.5 flex flex-col bg-white rounded-[10px] mt-10 px-2">
        <input
          type="text"
          placeholder="write password..."
          className="w-50 h-10 border-2 rounded-[10px] mt-2 px-2"
          onChange={handleCountCharacters}
        />

        <p className="text-black font-medium text-2xl mt-3">
          Character count is: {countCharacters}
        </p>
      </div>

      <div className="w-75 h-37.5 flex flex-col bg-white rounded-[10px] mt-10 px-2 mb-10">
        <div className="w-auto h-auto flex flex-col mt-5 gap-2">
          {arr.map((element, index) => (
            <button
              key={index}
              className={`w-auto h-7.5 rounded-[20px] cursor-pointer text-white ${activeIndex === index ? "bg-orange-400" : "bg-gray-400"}`}
              onClick={() => handleGetElementId(index)}
            >
              {element}
            </button>
          ))}
        </div>
      </div>

      <div className="w-75 h-37.5 flex flex-col bg-white rounded-[10px] mt-10 mb-10">
        <p className="text-black font-medium text-[15px]">
          This is TODO with remove task ability😊
        </p>

        <div className="flex flex-row items-center justify-center gap-1 mt-1">
          <input
            type="text"
            value={task}
            onChange={handleTaskInputValue}
            placeholder="write task..."
            className="w-50 h-10 border-2 rounded-[10px] px-2"
          />

          <button
            onClick={handleAddTask}
            className="w-20 h-10 rounded-[10px] cursor-pointer text-white bg-green-700 hover:bg-green-400"
          >
            ADD
          </button>
        </div>

        <ul className="overflow-y-auto px-4">
          {tasks.map((item, i) => (
            <li key={i} className="">
              {item} <button className="cursor-pointer">❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
