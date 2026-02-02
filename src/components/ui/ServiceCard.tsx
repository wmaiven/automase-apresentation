import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const ServiceCard = ({ title, description, icon: Icon, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-8 rounded-2xl bg-automase-gray/30 border border-white/5 backdrop-blur-sm hover:border-automase-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-automase-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 mb-6 rounded-xl bg-automase-black border border-automase-blue/20 flex items-center justify-center group-hover:scale-110 group-hover:border-automase-blue transition-all duration-300">
          <Icon className="text-automase-blue group-hover:text-automase-green transition-colors duration-300" size={32} />
        </div>
        
        <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-automase-blue transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-automase-purple/20 blur-3xl rounded-full group-hover:bg-automase-green/20 transition-colors duration-300" />
    </motion.div>
  );
};

export default ServiceCard;
