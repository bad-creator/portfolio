"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 4,
    text: "Jahre Erfahrung",
  },
  {
    num: 13,
    text: "Abgeschlossene Projekte",
  },
  {
    num: 15,
    text: "Technologien",
  },
  {
    num: 87,
    text: "Code-Commits",
  },
];

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-start md:flex-row md:justify-start flex-col "
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80 text-xs lg:text-base md:text-start text-center `}
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
