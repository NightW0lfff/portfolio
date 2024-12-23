"use client";

import CountUp from "react-countup";

interface Stat {
  num: number;
  text: string;
}

const stats: Stat[] = [
  {
    num: new Date().getFullYear() - 2023,
    text: "Years of experience",
  },
  {
    num: 12,
    text: "Projects completed",
  },
  {
    num: 4,
    text: "Technologies mastered",
  },
  {
    num: 300,
    text: "Code commits",
  },
];

function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto ">
        <div className="flex flex-wrap gap-6 max-w-[90vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center flex-1 gap-4 xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl font-extrabold xl:text-6xl"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
