import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-automase-black border-t border-automase-gray py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-automase-blue via-automase-purple to-automase-green opacity-50" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-display font-bold text-white mb-4 block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-automase-blue to-automase-purple">
                AUTOMASE
              </span>
            </Link>
            <p className="text-gray-400 max-w-md">
              Transformamos negócios com Inteligência Artificial — consultoria, automações e agentes de IA
              para levar sua empresa ao próximo nível.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-display font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/servicos" className="text-gray-400 hover:text-automase-blue transition-colors">Serviços</Link></li>
              <li><Link to="/tecnologias" className="text-gray-400 hover:text-automase-blue transition-colors">Tecnologias</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-automase-blue transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-display font-semibold mb-4">Conecte-se</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-automase-green transition-colors"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-automase-green transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-automase-green transition-colors"><Twitter size={20} /></a>
              <a href="mailto:contato@automase.com" className="text-gray-400 hover:text-automase-green transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-automase-gray pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Automase. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
