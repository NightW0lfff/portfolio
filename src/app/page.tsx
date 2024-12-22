import Image from "next/image";
import WIP from "../../public/WIP.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-full max-h-dvh h-dvh">
      <p className="my-10 text-3xl lg:text-5xl text-yellow-300 animate-pulse ">
        Working In Progress
      </p>
      <Image
        src={WIP}
        alt="Working In Proccess image"
        className="w-80 lg:w-96 "
      />
    </div>
  );
}
