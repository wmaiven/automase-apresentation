import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  company: yup.string(),
  service: yup.string().required("Selecione um serviço"),
  message: yup.string().required("Mensagem é obrigatória"),
}).required();

type FormData = yup.InferType<typeof schema>;

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert("Mensagem enviada com sucesso! (Simulação)");
  };

  return (
    <div className="min-h-screen py-20 bg-automase-black relative overflow-hidden flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
              Vamos criar algo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-automase-green to-automase-blue">extraordinário</span> juntos?
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-lg">
              Entre em contato para discutir como podemos transformar a tecnologia da sua empresa.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-automase-gray/50 flex items-center justify-center group-hover:bg-automase-blue/20 transition-colors">
                  <Mail className="text-automase-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400">contato@automase.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-automase-gray/50 flex items-center justify-center group-hover:bg-automase-green/20 transition-colors">
                  <Phone className="text-automase-green" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Telefone</h3>
                  <p className="text-gray-400">+55 (11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-automase-gray/50 flex items-center justify-center group-hover:bg-automase-purple/20 transition-colors">
                  <MapPin className="text-automase-purple" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Localização</h3>
                  <p className="text-gray-400">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-automase-gray/20 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Nome</label>
                  <input 
                    {...register("name")}
                    className="w-full bg-automase-black/50 border border-automase-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-automase-blue focus:ring-1 focus:ring-automase-blue transition-all"
                    placeholder="Seu nome"
                  />
                  {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Empresa</label>
                  <input 
                    {...register("company")}
                    className="w-full bg-automase-black/50 border border-automase-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-automase-blue focus:ring-1 focus:ring-automase-blue transition-all"
                    placeholder="Sua empresa"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input 
                  {...register("email")}
                  className="w-full bg-automase-black/50 border border-automase-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-automase-blue focus:ring-1 focus:ring-automase-blue transition-all"
                  placeholder="seu@email.com"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Interesse</label>
                <select 
                  {...register("service")}
                  className="w-full bg-automase-black/50 border border-automase-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-automase-blue focus:ring-1 focus:ring-automase-blue transition-all"
                >
                  <option value="">Selecione um serviço...</option>
                  <option value="salesforce">Consultoria Salesforce</option>
                  <option value="web">Desenvolvimento Web</option>
                  <option value="mobile">Apps Mobile</option>
                  <option value="backend">Sistemas Backend</option>
                  <option value="transformation">Transformação Digital</option>
                  <option value="custom">Software Sob Medida</option>
                </select>
                {errors.service && <span className="text-red-500 text-sm">{errors.service.message}</span>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Mensagem</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className="w-full bg-automase-black/50 border border-automase-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-automase-blue focus:ring-1 focus:ring-automase-blue transition-all resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-automase-blue to-automase-purple text-white font-display font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : (
                  <>
                    ENVIAR MENSAGEM <Send size={20} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
