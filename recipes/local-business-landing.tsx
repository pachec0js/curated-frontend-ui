/**
 * Receita Autocontida: Landing Page Comercial para Negócios Locais / Clínicas
 * Perfil: Performance First (CSS nativo, LCP imediato, conversão via WhatsApp)
 * Tecnologias: React + Tailwind CSS + Lucide Icons + Utilitário cn()
 */

import React, { useState } from "react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ChevronDown, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Calendar,
  Menu,
  X
} from "lucide-react";

// Utilitário cn simplificado
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function LocalBusinessLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!";

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#232B28] font-sans selection:bg-[#6B8071] selection:text-white">
      
      {/* 1. TOPBAR DE INFORMAÇÕES RÁPIDAS */}
      <div className="bg-[#232B28] text-white/90 text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#91A89D]" /> Av. Paulista, 1000 - Jardins, SP</span>
            <span className="hidden md:flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#91A89D]" /> Seg a Sex: 08h às 19h</span>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#91A89D] hover:underline inline-flex flex-row items-center gap-1.5 font-medium whitespace-nowrap">
            <Phone className="w-3 h-3 shrink-0" />
            <span>Agendamento direto: (11) 99999-9999</span>
          </a>
        </div>
      </div>

      {/* 2. NAVBAR COM BRANDING */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-[#283B35]">Clínica Dra. Camila</span>
            <span className="block text-[10px] tracking-widest uppercase text-[#6B8071] font-semibold">Dermatologia & Estética Avançada</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#232B28]/80">
            <a href="#tratamentos" className="hover:text-[#283B35] transition-colors">Tratamentos</a>
            <a href="#sobre" className="hover:text-[#283B35] transition-colors">Sobre a Médica</a>
            <a href="#depoimentos" className="hover:text-[#283B35] transition-colors">Resultados</a>
            <a href="#faq" className="hover:text-[#283B35] transition-colors">Dúvidas</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#283B35] hover:bg-[#1E7E55] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Agendar Consulta</span>
            </a>
          </div>

          {/* Botão Mobile */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#232B28] focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E2D8] px-4 py-6 space-y-4">
            <a href="#tratamentos" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#283B35]">Tratamentos</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#283B35]">Sobre a Médica</a>
            <a href="#depoimentos" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#283B35]">Resultados</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#283B35]">Dúvidas</a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex flex-row items-center justify-center gap-2 text-center bg-[#283B35] text-white py-3 rounded-full font-semibold whitespace-nowrap"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>Agendar Consulta pelo WhatsApp</span>
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (ALTO PADRÃO & CONVERSÃO) */}
      <section className="relative pt-12 pb-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex flex-row items-center gap-2 bg-[#E8E2D8]/80 text-[#283B35] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-[#6B8071] shrink-0" />
              <span>CRM 123456 • RQE 7890 • Médica Especialista pela SBD</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#283B35] leading-[1.15]">
              Realce a sua melhor versão com naturalidade e ciência.
            </h1>

            <p className="text-base sm:text-lg text-[#232B28]/80 max-w-xl font-normal leading-relaxed">
              Tratamentos dermatológicos individualizados com foco em elegância, rejuvenescimento discreto e saúde integral da sua pele.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#283B35] hover:bg-[#1E7E55] text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap text-center"
              >
                <span>Agendar Avaliação Personalizada</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <a 
                href="#tratamentos"
                className="bg-transparent hover:bg-[#E8E2D8]/50 text-[#283B35] border border-[#283B35]/20 px-6 py-4 rounded-full text-base font-semibold transition-colors inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap text-center"
              >
                <span>Conhecer Tratamentos</span>
              </a>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs text-[#232B28]/70">
              <span className="inline-flex flex-row items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#6B8071] shrink-0" /> <span>Atendimento Pontual</span></span>
              <span className="inline-flex flex-row items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#6B8071] shrink-0" /> <span>Plano de Cuidados Exclusivo</span></span>
            </div>
          </div>

          {/* Imagem do Hero */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" 
                alt="Dra. Camila em seu consultório" 
                className="w-full h-[460px] object-cover"
                loading="eager"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-[#E8E2D8] shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FAF8F5] rounded-xl text-[#283B35]">
                    <Star className="w-5 h-5 fill-[#6B8071] text-[#6B8071]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#283B35]">Mais de 1.200 pacientes atendidos</p>
                    <p className="text-[11px] text-[#232B28]/70">Nota 5.0 estrelas no Google Avaliações</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRATAMENTOS EM DESTAQUE (GRID MACRO ESTILO FLOWBITE COM CARDS REFINADOS) */}
      <section id="tratamentos" className="py-20 bg-white border-y border-[#E8E2D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#6B8071]">Especialidades</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#283B35]">Protocolos Dermatológicos de Excelência</h2>
            <p className="text-[#232B28]/80 text-sm sm:text-base">
              Tecnologias de ponta aliadas à técnica minuciosa para resultados sofisticados e naturais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Toxina Botulínica Preventiva",
                desc: "Suavização harmônica de linhas de expressão, preservando sua mímica facial e espontaneidade.",
                tag: "Rejuvenescimento"
              },
              {
                title: "Bioestimuladores de Colágeno",
                desc: "Recuperação da firmeza e densidade cutânea de forma progressiva e duradoura.",
                tag: "Firmeza & Contorno"
              },
              {
                title: "Protocolos para Acne & Melasma",
                desc: "Abordagem clínica e lasers dedicados para uniformizar o tom e restaurar a barreira da pele.",
                tag: "Saúde da Pele"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#E8E2D8] hover:border-[#6B8071]/50 transition-all duration-300 hover:shadow-md flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-[#6B8071] bg-white px-3 py-1 rounded-full border border-[#E8E2D8] mb-4">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#283B35] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#232B28]/80 leading-relaxed mb-6">{item.desc}</p>
                </div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#6B8071] inline-flex flex-row items-center gap-1.5 hover:gap-2.5 transition-all whitespace-nowrap">
                  <span>Consultar disponibilidade</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ ACESSÍVEL (ESTILO ACCORDION SHADCN) */}
      <section id="faq" className="py-20 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#6B8071]">Esclarecimentos</span>
            <h2 className="font-serif text-3xl text-[#283B35]">Dúvidas Frequentes</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Qual a duração média de uma consulta dermatológica?", a: "Nossa consulta inicial dura em média 1 hora, incluindo análise detalhada com dermatoscopia e planejamento de cuidados." },
              { q: "Os procedimentos estéticos exigem repouso prolongado?", a: "A grande maioria dos tratamentos (como bioestimuladores e toxina) permite retorno imediato às atividades cotidianas." },
              { q: "A clínica atende convênios médicos?", a: "Trabalhamos com consultas particulares de alto padrão e fornecemos relatório médico detalhado para reembolso no seu convênio." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-[#E8E2D8] overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 font-medium text-base text-[#283B35] flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B8071]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-[#6B8071] transition-transform duration-200 shrink-0", openFaq === idx && "rotate-180")} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-sm text-[#232B28]/80 leading-relaxed border-t border-[#E8E2D8]/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOOTER COMPLETO */}
      <footer className="bg-[#232B28] text-white/80 py-16 text-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-3">
            <span className="font-serif text-xl font-bold text-white">Clínica Dra. Camila</span>
            <p className="text-xs text-white/70">Dermatologia clínica, estética e cirúrgica com ética e personalização.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">Endereço</h4>
            <p className="text-xs leading-relaxed text-white/70">Edifício Medical Center<br />Av. Paulista, 1000 - Cj. 1204<br />São Paulo - SP</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">Horários</h4>
            <p className="text-xs leading-relaxed text-white/70">Segunda a Sexta: 08:00 - 19:00<br />Sábados: 08:00 - 13:00</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">Contato</h4>
            <p className="text-xs text-white/70">contato@dracamila.com.br<br />(11) 99999-9999</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 mt-12 border-t border-white/10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Clínica Dra. Camila. Todos os direitos reservados. CRM 123456 / RQE 7890.
        </div>
      </footer>

    </div>
  );
}
