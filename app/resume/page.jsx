"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaBootstrap,
} from "react-icons/fa";

import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiCsharp,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiPython,
} from "react-icons/si";

//#region data
// about data
const about = {
  title: "Über mich",
  description:
    "Ich bin ein leidenschaftlicher Full-Stack-Entwickler mit einem starken Fokus auf innovative Lösungen und kreative Problemlösungen. Ich liebe es, neue Technologien zu erforschen und ständig zu lernen, um mein Wissen zu erweitern und meine Fähigkeiten zu verbessern. In meiner Freizeit genieße ich es, mich in verschiedene Hobbys zu vertiefen, die mir helfen, meinen Geist frisch und inspiriert zu halten.",
  info: [
    {
      fieldName: "Vorname",
      fieldValue: "Serghei",
    },
    {
      fieldName: "Nachname",
      fieldValue: "Pascal",
    },
    {
      fieldName: "Geschlecht",
      fieldValue: "Mänlich",
    },
    {
      fieldName: "Familienstand",
      fieldValue: "Verheiratet",
    },
    {
      fieldName: "Nationalität",
      fieldValue: "Rumänisch",
    },
    {
      fieldName: "Hobbys",
      fieldValue: "Joga, Music",
    },
  ],
  languages: [
    {
      name: "Rumänisch",
      level: "Muttersprache",
    },
    {
      name: "Russisch",
      level: "Fließend",
    },
    {
      name: "Deutsch",
      level: "Fortgeschritten",
    },
    {
      name: "Italienisch",
      level: "Fortgeschritten",
    },
    {
      name: "English",
      level: "Grundkenntnisse",
    },
  ],
};

// experience data
const experience = {
  icon: "",
  title: "Erfahrungen",
  description: "",
  items: [
    {
      company: "Dao Pay",
      position: "Praktikant als Full Stack Developer",
      duration: "12.06.2023 - 29.09.2023",
    },
    {
      company: "BÄKO",
      position: "LKW Fahrer",
      duration: "2017-2021",
    },
    {
      company: "BAKU",
      position: "Zusteller",
      duration: "2013-2016",
    },
    {
      company: "Bartolini",
      position: "Speditionsfahrer",
      duration: "2009-2013",
    },
    {
      company: "Novostroy",
      position: "Vorarbeiter",
      duration: "2006-2009",
    },
    {
      company: "Diverse Tätigkeiten",
      position: "",
      duration: "2003-2006",
    },
  ],
};

// education
const education = {
  icon: "",
  title: "Ausbildung",
  description: "",
  items: [
    {
      company: "BBRZ (Wien)",
      position: "App/Web-Entwickler",
      duration: "2022-2024",
    },
    {
      company: "IT-Gid (Online)",
      position: "JavaScript-Kurs",
      duration: "2021-2022",
    },
    {
      company: "Berufsschule (Moldawien)",
      position: "KFZ-Fahrer",
      duration: "2001-2003",
    },
    {
      company: "Schule (Moldawien)",
      position: "Volksschule, Hauptschule",
      duration: "1991-2001",
    },
  ],
};
// skills data
const skils = {
  title: "Fähigkeiten",
  description:
    "Hier sind einige der Technologien und Werkzeuge, mit denen ich Erfahrung habe:",
  skillList: [
    {
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <SiDotnet />,
      name: ".NET",
    },
    {
      icon: <SiMicrosoftsqlserver />,
      name: "MSSQL",
    },
    {
      icon: (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 255 255"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M255 127.5C255 197.916 197.916 255 127.5 255C57.0837 255 0 197.916 0 127.5C0 57.0837 57.0837 0 127.5 0C197.916 0 255 57.0837 255 127.5ZM18.566 134.352C20.402 134.352 21.966 134.998 23.258 136.29C24.55 137.514 25.196 139.044 25.196 140.88C25.196 142.716 24.55 144.28 23.258 145.572C21.966 146.864 20.402 147.51 18.566 147.51C16.798 147.51 15.268 146.864 13.976 145.572C12.684 144.28 12.038 142.716 12.038 140.88C12.038 139.044 12.65 137.514 13.874 136.29C15.166 134.998 16.73 134.352 18.566 134.352ZM84.2134 147L54.8374 96.51V147H39.8434V73.968H55.2454L84.2134 123.642V73.968H99.2074V147H84.2134ZM129.146 115.584V134.454H168.722V147H114.152V73.968H166.886V86.514H129.146V103.038H164.132V115.584H129.146ZM212.005 86.514V147H197.011V86.514H174.775V73.968H233.221V86.514H212.005ZM85.472 200H90.08L99.728 171.2V200H103.904V165.632H97.808L87.824 195.536L77.6 165.632H71.552V200H75.68V171.2L85.472 200ZM116.401 189.68H129.649L133.201 200H138.049L126.001 165.632H120.337L108.097 200H112.753L116.401 189.68ZM123.121 170.384L128.401 185.984H117.505L123.121 170.384ZM169.118 165.632H164.75V189.2C164.75 191.376 164.062 193.12 162.686 194.432C161.086 195.904 158.814 196.64 155.87 196.64C153.086 196.64 150.926 196 149.39 194.72C147.854 193.408 147.086 191.568 147.086 189.2V165.632H142.718V189.2C142.718 192.464 143.742 195.104 145.79 197.12C148.158 199.392 151.518 200.528 155.87 200.528C159.646 200.528 162.702 199.632 165.038 197.84C167.758 195.792 169.118 192.912 169.118 189.2V165.632ZM181.934 200V165.632H177.47V200H181.934Z"
            fill="currentColor"
          />
        </svg>
      ),
      name: "Maui",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },

    {
      icon: <SiPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <BiLogoPostgresql />,
      name: "PostgeSQL",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
  ],
};
//#endregion

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transiti: {
          delay: 0.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Erfahrungen</TabsTrigger>
            <TabsTrigger value="education">Ausbildung</TabsTrigger>
            <TabsTrigger value="skills">Fähigkeiten</TabsTrigger>
            <TabsTrigger value="about">Über mich</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-2 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 m-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] overflow-y-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-2 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 m-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] overflow-y-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skils.title}</h3>
                  <p className="max-w-[600px] text-white/60 xl:mx-0">
                    {skils.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px] overflow-y-auto mt-4">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skils.skillList.map((skill, index) => {
                      return (
                        <li key={index} className="group">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                                <div className="text-6xl group-hover:text-accent transition-all duration-500">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <ScrollArea className="h-[400px] overflow-y-auto mt-4">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {item.fieldName}:
                          </span>
                          <span className="">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="text-xl text-white/60 pt-6 pb-4">Sprachen:</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.languages.map((language, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span>{language.name}</span>
                          <span className="text-white/60">
                            {language.level}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 pt-6">
                    {about.description}
                  </p>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
