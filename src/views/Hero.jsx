import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-slate-950 text-slate-100 px-6 py-16 border-b border-slate-800/60 overflow-hidden">
      
      {/* Red de fondo decorativa (Sutil estilo Infraestructura) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10 animate-fade-in">
        
        {/* Bloque Izquierdo: Texto e Identidad */}
        <div className="flex-1 text-center md:text-left space-y-6 pt-[-60px]">
          
          {/* Badge de Estado Técnico */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-300">~/status: <p className="inline text-cyan-300">disponible_para_proyectos</p></span>
          </div>

          {/* Nombre y Título */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-white">
              Francisco Javier Méndez
            </h1>
            <h2 className="text-xl md:text-[40px] font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-mono">
              Web Developer &  <br /> Ingeniero informático
            </h2>
          </div>

          {/* Declaración de intenciones (Tu valor híbrido) */}
          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
            Capacitado en la construcción de aplicaciones web robustas y eficientes 
            (<span className="text-slate-200 font-semibold">Laravel, React, Python</span>) 
            combinado con la gestión y diseño de redes, virtualización y despliegue de infraestructura local.
          </p>

          {/* Botones de Acción (Rígidos en colores oscuros) */}
          <div className="flex flex-wrap items-center justify-center md:justify-right gap-4 pt-2">
            <a 
              href="/cv.pdf" 
              download
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium rounded-lg border border-slate-800 transition-all duration-200 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar CV
            </a>
          </div>
          
        </div>

        {/* Bloque Derecho: Tarjeta Visual de Conexiones (Estilo Terminal/Servidor) */}
        <div className="w-full max-w-[340px] md:w-auto bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl font-mono text-xs text-slate-400 relative group">
          
          {/* Luces decorativas de servidor */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <span className="text-[10px] text-slate-600">sys.info --status</span>
          </div>

          {/* Líneas de comandos simuladas */}
          <div className="space-y-3">
            <div>
              <p className="text-slate-500"># Enlaces de conexión rápida</p>
              <p className="text-purple-400">const<span className="text-slate-300"> user</span> = <span className="text-emerald-400">"Franciscode7"</span>;</p>
            </div>
            
            <div className="space-y-1 pt-1">
              <p className="text-slate-500">// Redes_sociales</p>
              <a href="https://github.com/Franciscode7" target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-emerald-400 transition-colors">
                <span className="text-cyan-400">⚡ GitHub:</span> github.com/Franciscode7
              </a>
              <a href="https://www.linkedin.com/in/francisco-javier-méndez-rodríguez-aa1a37228/" target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-emerald-400 transition-colors">
                <span className="text-cyan-400">⚡ LinkedIn:</span> francisco-javier
              </a>
              <a href="mailto:francico99za@gmail.com" target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-emerald-400 transition-colors">
                <span className="text-cyan-400">⚡ Email:</span> francisco99za@gmail.com
              </a>
            </div>

            <div className="pt-2 border-t border-slate-800/60 text-[11px] text-slate-500 flex items-center justify-between">
              <span>LOC: Latam</span>
              <span className="text-emerald-500/80">Secure SSL</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}