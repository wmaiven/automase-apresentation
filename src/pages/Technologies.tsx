import { motion } from "framer-motion";
import { 
  SiReact, SiVuedotjs, SiTypescript, SiNodedotjs, 
  SiSalesforce, SiAmazon, SiDocker, SiPython,
  SiTailwindcss, SiPostgresql, SiGraphql, SiFigma
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const Technologies = () => {
  return (
    <div className="min-h-screen py-20 bg-automase-black relative overflow-hidden flex flex-col items-center">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-automase-purple to-automase-blue">Tecnológico</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Dominamos as ferramentas mais modernas para construir o futuro digital da sua empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="group flex flex-col items-center justify-center p-8 rounded-3xl bg-automase-gray/20 border border-white/5 backdrop-blur-sm cursor-pointer relative"
            >
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                style={{ backgroundColor: tech.color }}
              />
              
              <tech.icon 
                size={64} 
                className="mb-4 transition-all duration-300 drop-shadow-lg"
                style={{ color: tech.color }} 
              />
              
              <span className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
