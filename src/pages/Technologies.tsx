import { motion } from "framer-motion";
import {
  SiOpenai, SiAnthropic, SiPython, SiLangchain,
  SiHuggingface, SiN8N, SiMake, SiPytorch
} from "react-icons/si";

const technologies = [
  { name: "OpenAI", icon: SiOpenai, color: "#74AA9C" },
  { name: "Anthropic Claude", icon: SiAnthropic, color: "#D97757" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
  { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
  { name: "n8n", icon: SiN8N, color: "#EA4B71" },
  { name: "Make", icon: SiMake, color: "#6D00CC" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
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
            Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-automase-purple to-automase-blue">de IA</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trabalhamos com os modelos e ferramentas mais avançados do mercado para construir soluções de IA robustas e escaláveis.
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

              <span className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors text-center">
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
