/**
 * Receita Autocontida: Landing Page para SaaS / Tech Product
 * Perfil: Visual Experience (Microinterações Magic UI, Bento Grid e Tipografia Moderna)
 * Tecnologias: React + Tailwind CSS + Lucide Icons + Framer Motion (opcional)
 */

import React from "react";
import { Sparkles, ArrowRight, Zap, Shield, Database, Terminal, Check } from "lucide-react";

export default function SaasLanding() {
  return (
    <div className="min-h-screen bg-[#090D16] text-[#F1F5F9] font-sans antialiased selection:bg-[#38BDF8] selection:text-[#090D16]">
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090D16]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] flex items-center justify-center">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">Synthetix AI</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#bento" className="hover:text-white transition-colors">Arquitetura</a>
            <a href="#pricing" className="hover:text-white transition-colors">Planos</a>
          </nav>

          <a 
            href="#comecar" 
            className="text-xs font-semibold px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
          >
            Acessar Console
          </a>
        </div>
      </header>

      {/* HERO SECTION COM EFEITO SHIMMER / GLOW */}
      <section className="relative pt-24 pb-20 overflow-hidden text-center">
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0284C7]/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Novo: Motor de Inferência v2.4 liberado</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Automação inteligente de dados com precisão determinística.
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-normal">
            Elimine tarefas manuais com agentes autônomos que se conectam diretamente ao seu banco de dados e APIs existentes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-2">
              <span>Iniciar Teste Gratuito</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-semibold text-sm transition-all flex items-center justify-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Ver Documentação</span>
            </button>
          </div>
        </div>
      </section>

      {/* BENTO GRID MODERNO (INSPIRADO NO ACETERNITY / MAGIC UI) */}
      <section id="bento" className="py-20 border-t border-white/5 bg-slate-950/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold text-white">Construído para velocidade extrema</h2>
            <p className="text-sm text-slate-400">Infraestrutura escalável pronta para workloads de alta densidade.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-8 rounded-2xl bg-slate-900/60 border border-white/10 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-2">
                <Database className="w-6 h-6 text-sky-400" />
                <h3 className="text-xl font-bold text-white">Sincronização em Tempo Real</h3>
                <p className="text-sm text-slate-400">Pipelines de ingestão com latência sub-50ms para Postgres, MongoDB e Snowflake.</p>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-[#090D16] border border-white/10 font-mono text-xs text-sky-300">
                $ synthetix sync --source=postgres --destination=vector-db
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col justify-between">
              <div className="space-y-2">
                <Shield className="w-6 h-6 text-sky-400" />
                <h3 className="text-xl font-bold text-white">Segurança Enterprise</h3>
                <p className="text-sm text-slate-400">Criptografia ponta a ponta e conformidade SOC-2 Tipo II nativa.</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-emerald-400">
                <Check className="w-4 h-4" /> 99.99% Uptime SLA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Synthetix AI Inc. Todos os direitos reservados.
      </footer>
    </div>
  );
}
