import { motion as _m } from "framer-motion";
import { useTheme } from "../../common/ThemeContext";
import { iconVariants, SlideLeft, SlideUp } from "../../animation/animate";

// Your skills data is imported here...
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaPhp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiPostgresql,
  SiExpress,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import Zustand from "../../assets/zustand.svg";
import { AiOutlinePython } from "react-icons/ai";
import { TbBrandVscode } from "react-icons/tb";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", icon: <FaJava className="text-orange-600" /> },
      { name: "Python", icon: <AiOutlinePython className="text-blue-600" /> },
      { name: "C", icon: <SiC className="text-sky-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
      {
        name: "JavaScript",
        icon: <IoLogoJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-800" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      { name: "SQL", icon: <FaDatabase className="text-indigo-500" /> },
    ],
  },
  {
    category: "State Management",
    items: [
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" /> },
      {
        name: "Zustand",
        icon: <img src={Zustand} alt="Zustand" className="w-8 h-8" />,
      },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "vsCode", icon: <TbBrandVscode className="text-blue-500" /> },
    ],
  },
];

const Skills = () => {
  const { theme } = useTheme();

  // Flatten all skill items into a single array for rendering without categories
  const flatSkills = skills.flatMap((category) => category.items);


  

  return (
    <div
      id="skills"
      className={`max-w-6xl mx-auto py-12 px-6 transition-all duration-300 ${
        theme === "dark" ? "bg-[#222] text-white" : "bg-white text-[#222]"
      }`}
    >
      <_m.h2
        className="md:text-5xl text-4xl font-extrabold text-center mb-20 tracking-wide"
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
      >
        My Skills
      </_m.h2>

      {/* Render flat list for mobile with 2 columns */}
      <div className="md:hidden grid grid-cols-2 gap-6">
        {flatSkills.map((skill, index) => (
          <_m.div
            key={skill.name}
            variants={iconVariants(5 + index)}
            initial="initial"
            whileHover="animate"
            animate="animate"
            className={`p-4 flex items-center space-x-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 min-w-0 ${
              theme === "dark"
                ? "bg-[#333] text-white"
                : "bg-[#f9f9f9] text-[#222]"
            }`}
          >
            <div className="text-3xl flex-shrink-0">{skill.icon}</div>
            <div className="text-[10px] md:text-base font-semibold break-words whitespace-normal">
              {skill.name}
            </div>
          </_m.div>
        ))}
      </div>

      {/* Render categorized list for md and up */}
      <div className="hidden md:grid grid-cols-3 gap-20">
        {skills.map(({ category, items }, index) => (
          <div key={category}>
            <_m.h3
              className="text-xl font-bold mb-6 text-center border-b"
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
            >
              {category}
            </_m.h3>
            <div className=" md:grid grid-cols-3 gap-10">
              {items.map((skill, subIndex) => (
                <_m.div
                  key={skill.name}
                  variants={iconVariants(5 + subIndex + index * 10)}
                  initial="initial"
                  whileHover="animate"
                  animate="animate"
                  className={`relative group p-4 flex flex-col items-center justify-center rounded-xl shadow-md hover:shadow-lg transition-all duration-300 min-w-0 ${
                    theme === "dark"
                      ? "bg-[#333] text-white"
                      : "bg-[#f9f9f9] text-[#222]"
                  }`}
                >
                  {/* Icon */}
                  <div className="text-3xl">{skill.icon}</div>

                  {/* Tooltip for md and up */}
                  <div className="hidden md:block absolute bottom-[-1.5rem] bg-black text-white text-sm translate-y-[0.4rem] font-semibold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    {skill.name}
                  </div>

                  {/* Visible label on small screens */}
                  <div className="block md:hidden text-[10px] font-semibold mt-2 text-center">
                    {skill.name}
                  </div>
                </_m.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
