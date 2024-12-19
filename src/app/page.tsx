import Image from "next/image";
import WIP from "../../public/WIP.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-full max-h-dvh h-dvh">
      <span className="my-10 font-serif text-6xl font-light text-yellow-300 animate-pulse">
        Working In Process
      </span>
      <Image src={WIP} alt="Working In Proccess image" className="size-96 " />
    </div>
  );
}
