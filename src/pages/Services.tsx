import { motion } from "framer-motion";
import ServiceCard from "../components/ui/ServiceCard";
import {
  Bot, MessageSquare, Zap, FileSearch, Cpu, TrendingUp,
  Cloud, Globe, Smartphone, Server, Layers, Code2,
  LucideIcon
} from "lucide-react";

const aiServices = [
  {
    title: "Agentes de IA",
    description: "Agentes autônomos que executam tarefas complexas, tomam decisões e interagem com sistemas externos sem intervenção humana.",
    icon: Bot
  },
  {
    title: "Chatbots com RAG",
    description: "Assistentes inteligentes que consultam sua base de dados privada em tempo real. Respostas precisas, contextuais e sempre atualizadas.",
    icon: MessageSquare
  },
  {
    title: "Automações com IA",
    description: "Fluxos de trabalho inteligentes com n8n e Make integrados a GPT-4, Claude e Gemini. Automatize o que antes era impossível automatizar.",
    icon: Zap
  },
  {
    title: "Processamento de Documentos",
    description: "Extração automatizada de dados de contratos, notas fiscais e relatórios usando visão computacional e LLMs com alta precisão.",
    icon: FileSearch
  },
  {
    title: "Integração de LLMs",
    description: "Conecte OpenAI, Anthropic e Google diretamente nos seus sistemas. Fine-tuning, embeddings e APIs customizadas para o seu negócio.",
    icon: Cpu
  },
  {
    title: "IA para Vendas & Marketing",
    description: "Agentes que prospectam, qualificam leads e personalizam comunicações. Reduza ciclos de vendas e aumente a cobertura de prospects.",
    icon: TrendingUp
  }
];

const otherServices = [
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
    icon: Server
  },
  {
    title: "Transformação Digital",
    description: "Consultoria estratégica para modernizar processos, automatizar tarefas e preparar sua empresa para o futuro digital.",
    icon: Layers
  },
  {
    title: "Software Sob Medida",
    description: "Soluções personalizadas desenvolvidas especificamente para resolver os desafios únicos da sua operação.",
    icon: Code2
  }
];

const FeaturedServiceCard = ({ title, description, icon: Icon, index }: {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative p-8 rounded-2xl bg-automase-gray/30 border border-automase-purple/30 backdrop-blur-sm hover:border-automase-green/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(123,47,255,0.2)] overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-automase-purple/10 via-transparent to-automase-green/5 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative z-10">
      <div className="w-16 h-16 mb-6 rounded-xl bg-automase-black border border-automase-purple/40 flex items-center justify-center group-hover:scale-110 group-hover:border-automase-green transition-all duration-300">
        <Icon className="text-automase-purple group-hover:text-automase-green transition-colors duration-300" size={32} />
      </div>

      <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-automase-green transition-colors duration-300">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </div>

    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-automase-purple/20 blur-3xl rounded-full group-hover:bg-automase-green/20 transition-colors duration-300" />
  </motion.div>
);

const Services = () => {
  return (
    <div className="min-h-screen py-20 bg-automase-black relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-automase-purple/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-automase-blue/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
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
            Ecossistema completo de tecnologia — com IA como protagonista e toda a stack que seu negócio precisa.
          </p>
        </motion.div>

        {/* AI Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-automase-purple/50 bg-automase-purple/10">
              <span className="w-2 h-2 rounded-full bg-automase-green animate-pulse" />
              <span className="text-automase-green font-display font-bold text-sm tracking-widest">EM ALTA</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white">
              Inteligência Artificial
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <FeaturedServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-20 flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-automase-gray/50" />
          <span className="text-gray-500 font-display text-sm tracking-widest whitespace-nowrap">OUTROS SERVIÇOS</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-automase-gray/50" />
        </div>

        {/* Other Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherServices.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
