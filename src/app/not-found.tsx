import React from "react";
import Image from "next/image";
import WIP from "../../public/assets/WIP.png";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-full max-h-dvh h-dvh">
      <p className="my-10 text-6xl text-yellow-300 animate-pulse ">
        Working In Progress
      </p>
      <Image src={WIP} alt="Working In Proccess image" className="size-96 " />
    </div>
  );
}

export default NotFound;
