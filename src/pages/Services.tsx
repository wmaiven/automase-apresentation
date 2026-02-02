import { motion } from "framer-motion";
import ServiceCard from "../components/ui/ServiceCard";
import { Cloud, Code2, Database, Globe, Smartphone, Zap } from "lucide-react";

const services = [
  {
    title: "Consultoria Salesforce",
    description: "Implementação, customização e otimização de CRM Salesforce para impulsionar suas vendas e relacionamento com clientes.",
    icon: Cloud
  },
  {
    title: "Desenvolvimento Web",
    description: "Criação de sites e aplicações web modernas, rápidas e responsivas utilizando React, Next.js e as melhores práticas do mercado.",
    icon: Globe
  },
  {
    title: "Apps Mobile",
    description: "Desenvolvimento de aplicativos nativos e híbridos para iOS e Android com foco em performance e experiência do usuário.",
    icon: Smartphone
  },
  {
    title: "Sistemas Backend",
    description: "Arquitetura de microsserviços, APIs robustas e bancos de dados escaláveis para suportar o crescimento do seu negócio.",
    icon: Database
  },
  {
    title: "Transformação Digital",
    description: "Consultoria estratégica para modernizar processos, automatizar tarefas e preparar sua empresa para o futuro digital.",
    icon: Zap
  },
  {
    title: "Software Sob Medida",
    description: "Soluções personalizadas desenvolvidas especificamente para resolver os desafios únicos da sua operação.",
    icon: Code2
  }
];

const Services = () => {
  return (
    <div className="min-h-screen py-20 bg-automase-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-automase-blue/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-automase-purple/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-automase-blue to-automase-green">Soluções</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Oferecemos um ecossistema completo de serviços tecnológicos para elevar seu negócio ao próximo nível.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
