import { motion } from "framer-motion";
import Scene3D from "../components/3d/Scene3D";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-automase-black relative overflow-hidden">
      <Scene3D />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-automase-black/50 to-automase-black pointer-events-none" />

      <div className="container mx-auto px-6 z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-automase-blue via-automase-purple to-automase-blue bg-[length:200%_auto] animate-[gradient_3s_ease-in-out_infinite]">
              AUTOMASE
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          Transformando o futuro com <span className="text-automase-green font-semibold">Consultoria de Tecnologia</span> de ponta. 
          Especialistas em Salesforce e desenvolvimento sob medida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <Link 
            to="/contato" 
            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-automase-blue/50 hover:border-automase-green transition-all duration-300"
          >
            <div className="absolute inset-0 w-0 bg-automase-blue transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
            <span className="relative flex items-center text-white font-display tracking-wider">
              INICIAR PROJETO <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <Link 
            to="/servicos"
            className="px-8 py-4 text-gray-300 hover:text-white transition-colors font-display tracking-wider border-b border-transparent hover:border-automase-purple"
          >
            EXPLORAR SERVIÇOS
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
