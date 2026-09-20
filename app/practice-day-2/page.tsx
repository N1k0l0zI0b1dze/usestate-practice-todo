"use client";

import { useState } from "react";

const page = () => {
  const [number, setNumber] = useState(0);
  const [togglePassword, setTogglePassword] = useState(false);
  const [countCharacters, setCountCharacters] = useState(0);

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

  const handleCountCharacters = (event: {
    target: { value: string | any[] };
  }) => {
    setCountCharacters(event.target.value.length);
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
    </div>
  );
};

export default page;
