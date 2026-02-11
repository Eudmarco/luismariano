import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICES, IMAGES } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useRouter } from '../RouterContext';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const { navigate } = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    const message = `Olá, meu nome é ${formData.name}. Gostaria de informações sobre ${formData.service || 'seus serviços'}.`;
    const whatsappUrl = `${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Navigate to Thank You page
    navigate('/obrigado');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="flex flex-col h-full">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Vamos conversar sobre sua necessidade técnica?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Preencha o formulário ou entre em contato diretamente pelos canais abaixo. Garantimos retorno rápido e atendimento especializado.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-lg text-teal-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Telefone / WhatsApp</h3>
                  <a href={COMPANY_INFO.whatsappLink} className="text-slate-600 hover:text-teal-600 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-lg text-teal-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">E-mail</h3>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-600 hover:text-teal-600 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-lg text-teal-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Região de Atendimento</h3>
                  <p className="text-slate-600">{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>

             {/* Added Image to Contact Section */}
             <div className="mt-auto relative rounded-xl overflow-hidden shadow-lg h-64 md:h-80 w-full group">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                <img 
                    src={IMAGES.contact} 
                    alt="Engenheiro Luiz Mariano Atendimento" 
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-slate-900 font-bold text-sm flex items-center gap-2">
                        <MessageCircle size={16} className="text-teal-600" />
                        Atendimento Personalizado
                    </p>
                </div>
             </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Solicite um Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                  placeholder="Seu nome ou da empresa"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail Comercial</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                  placeholder="exemplo@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Serviço de Interesse</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-white"
                >
                  <option value="">Selecione uma opção</option>
                  {SERVICES.map(service => (
                    <option key={service.id} value={service.title}>{service.title}</option>
                  ))}
                  <option value="Outros">Outros Serviços</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
              >
                Enviar Solicitação
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-slate-500 text-center mt-4">
                Ao enviar, você concorda em ser contatado para fins comerciais.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;