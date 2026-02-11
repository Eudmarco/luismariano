import { FileCheck, ShieldAlert, BookOpen, ClipboardCheck } from 'lucide-react';
import { ServiceItem, Testimonial, NavLink } from './types';

export const COMPANY_INFO = {
  name: "Eng. Luiz Mariano",
  email: "eng.lmariano@yahoo.com",
  phone: "11 96335-8498",
  whatsappLink: "https://wa.me/5511963358498",
  domain: "luismariano.com.br",
  address: "Atendemos SP, ABC, Campinas, Bragança e Baixada Santista"
};

export const IMAGES = {
  logo: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/LUIS%20MARIANO/IMAGENS%20SITE/logo%20luiz.jpeg",
  hero: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/LUIS%20MARIANO/IMAGENS%20SITE/Luiz%201.jpeg",
  about: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/LUIS%20MARIANO/IMAGENS%20SITE/Luiz%204.jpeg",
  aboutSecondary: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/LUIS%20MARIANO/IMAGENS%20SITE/Luiz%209.jpeg",
  contact: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/LUIS%20MARIANO/IMAGENS%20SITE/Luiz%2012.jpeg",
  socialProofBg: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/LUIS%20MARIANO/IMAGENS%20SITE/Luiz%207.jpeg",
  abstract: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/LUIS%20MARIANO/IMAGENS%20SITE/Abstrato.png",
  nr12Nr13: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/LUIS%20MARIANO/IMAGENS%20SITE/NR12%20NR13.png",
  reclassificacao: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/LUIS%20MARIANO/IMAGENS%20SITE/Reclassificacao.png",
  servicos: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/LUIS%20MARIANO/IMAGENS%20SITE/Servicos.png"
};

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Contato", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'monta',
    title: "Reclassificação de Monta",
    description: "Análise técnica detalhada para recuperação de veículos sinistrados, garantindo a segurança e a regularização documental junto aos órgãos competentes.",
    icon: FileCheck
  },
  {
    id: 'pomc',
    title: "POMC",
    description: "Elaboração e orientação de planos de manutenção preditiva, preventiva para frota de caminhões e veículos. Assegurando a eficiência e segurança do seu trabalho. Assim sua frota estará segura e estará protegendo a todos no trânsito.",
    icon: BookOpen
  },
  {
    id: 'nr13',
    title: "Inspeções NR13",
    description: "Laudos técnicos de vasos de pressão, caldeiras e tubulações, garantindo a integridade estrutural e segurança operacional conforme norma regulamentadora.",
    icon: ShieldAlert
  },
  {
    id: 'nr12',
    title: "Adequação NR12",
    description: "Análise de risco e projetos de adequação para máquinas e equipamentos, visando a proteção do trabalhador e conformidade legal.",
    icon: ClipboardCheck
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Carlos Eduardo",
    role: "Gerente de Frota",
    content: "O laudo de reclassificação foi fundamental para nossa empresa. O Eng. Luiz demonstrou extrema competência e agilidade no processo."
  },
  {
    id: '2',
    name: "Mariana Silva",
    role: "Administradora de Condomínio",
    content: "Contratamos o POMC para o nosso edifício comercial. O profissionalismo e a clareza nas orientações nos deram total segurança."
  },
  {
    id: '3',
    name: "Roberto Campos",
    role: "Diretor Industrial",
    content: "As inspeções NR12 e NR13 foram realizadas com rigor técnico impecável. Recomendo para quem busca conformidade e seriedade."
  }
];