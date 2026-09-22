"use client";
import { SetStateAction, useState } from "react";

const page = () => {
  const colorArr = ["red", "blue"];
  const tabs = ["Home", "About", "Contact"];

  const [like, setLike] = useState(0);
  const [color, setColor] = useState(colorArr[0]);
  const [countChar, setCountChar] = useState(0);
  const [switchTabs, setSwitchTabs] = useState("");

  const handleAddLike = () => {
    setLike((prev) => prev + 1);
  };

  const handleUnlike = () => {
    if (like > 0) {
      setLike((prev) => prev - 1);
    }
  };

  const handleColor = () => {
    if (color === "red") setColor("blue");
    else setColor("red");
  };

  const handleCountChar = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCountChar(event.target.value.length);
  };

  const handleSwitchTabs = (i: number) => {
    if (tabs[i] === "Home") setSwitchTabs("Welcome to Home");
    if (tabs[i] === "About") setSwitchTabs("About us");
    if (tabs[i] === "Contact") setSwitchTabs("Contact information");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-300">
      <div className="w-75 h-37.5 flex flex-col bg-white rounded-[10px] mt-10">
        <p className="text-black font-medium text-2xl">
          This is number of likes: {like}
        </p>

        <div className="flex flex-row gap-2 mt-15">
          <button
            onClick={handleAddLike}
            className="w-20 h-10 rounded-[10px] cursor-pointer text-white bg-green-700 hover:bg-green-400"
          >
            Like 👍
          </button>
          <button
            onClick={handleUnlike}
            className="w-20 h-10 rounded-[10px] cursor-pointer text-white bg-red-700 hover:bg-red-400"
          >
            Unlike 👎
          </button>
        </div>
      </div>
      <div className="w-75 h-37.5 flex flex-col bg-white rounded-[10px] mt-10">
        <p
          className={`${color === "red" ? "text-red-600" : "text-blue-600"} font-medium text-2xl`}
        >
          Hello React
        </p>
        <button
          onClick={handleColor}
          className={`w-20 h-10 rounded-[10px] cursor-pointer text-white ${color === "red" ? "bg-blue-700 hover:bg-blue-400" : "bg-red-700 hover:bg-red-400"}`}
        >
          {color === "red" ? "To Blue" : "To Red"}
        </button>
      </div>

      <div className="w-75 h-37.5 flex flex-col bg-white rounded-[10px] mt-10">
        <p className="text-black font-medium text-2xl">Input max 20.</p>

        <input
          type="text"
          onChange={handleCountChar}
          maxLength={20}
          className="w-50 h-7 rounded-[5px] border-2 px-5"
          placeholder="write something..."
        />

        <p className="text-black font-medium text-2xl mt-5 ml-5">
          {countChar}/20
        </p>
      </div>

      <div className="w-75 h-37.5 flex flex-col items-center bg-white rounded-[10px] mt-10 mb-10">
        <div className="flex flex-row items-center gap-2 mt-2">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => handleSwitchTabs(i)}
              className="w-20 h-10 rounded-[10px] cursor-pointer text-white bg-green-700 hover:bg-green-400"
            >
              {tab}
            </button>
          ))}
        </div>
        <p className="text-black font-medium text-2xl mt-5 ml-5">
          {switchTabs}
        </p>
      </div>
    </div>
  );
};

export default page;
