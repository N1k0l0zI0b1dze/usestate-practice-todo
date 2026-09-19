import Image from "next/image";
import Todo from "./Todo";

const Card = () => {
  return (
    <div className="flex flex-col items-center w-107.5 h-159 rounded-[10px] bg-[rgba(255,255,255,1)]">
      <div className="relative w-full h-50.5 overflow-hidden">
        <Image
          src="/assets/images/Image1.svg"
          fill
          className="object-cover"
          alt={"image"}
        />

        <div className="absolute top-28.5 left-85.5">
          <p className="text-[18px] text-white font-bold">Thur 9</p>
        </div>
        <div className="absolute top-32.75 left-52.5">
          <h2 className="text-5xl text-white font-bold">6:23 AM</h2>
        </div>
      </div>

      <Todo />
    </div>
  );
};

export default Card;
