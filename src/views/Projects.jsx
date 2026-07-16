import React from 'react';
import img1 from '../../public/images/mmc.webp';
import img2 from '../../public/images/audit.webp';
import img3 from '../../public/images/abprestige.webp';

export default function PersonalProjects() {
  // Datos estructurados de los proyectos (puedes cambiar los links y textos fácilmente)
  const listaProyectos = [
    {
      id: 1,
      titulo: "Magic Moments Cases - Sitio web oficial",
      subtitulo: "Backend Architecture & Book Management",
      descripcion: "Una plataforma integral para la gestión y auditoría de catálogos bibliotecarios virtuales. Implementa un motor de búsqueda indexado, control estricto de sesiones y transacciones concurrentes asegurando integridad absoluta en la base de datos.",
      stack: ["PHP", "Nginx", "Git", "MySQL"],
      linkProyecto: "https://magicmomentscases.site/", // Cambiar por tu despliegue o repo real
      imagenUrl: img1, 
    },
    {
      id: 2,
      titulo: "Sistema de auditorias intregrales (En desarrollo)",
      subtitulo: "Infrastructure Background Service & LLM Integration",
      descripcion: "Script de automatización en segundo plano diseñado para integrarse nativamente con modelos de lenguaje locales (LLMs). Cuenta con una interfaz mediante bots de Telegram para orquestar flujos de trabajo en servidores Linux y monitorear límites de tokens en tiempo real.",
      stack: ["Python", "Telegram API", "Linux Services", "Local LLM"],
      linkProyecto: "https://github.com/Franciscode7", 
      imagenUrl: img2, 
    },
    {
      id: 3,
      titulo: "A&B Prestige (En desarrollo)",
      subtitulo: "LXC Containerization & Local Network Lab",
      descripcion: "Despliegue de un centro multimedia centralizado utilizando instancias de Jellyfin aisladas dentro de contenedores Proxmox (LXC). Configuración avanzada de mapeo de directorios en red local, permisos de almacenamiento y túneles seguros para acceso remoto eficiente.",
      stack: ["Proxmox LXC", "Jellyfin", "Linux Admin", "Tailscale"],
      linkProyecto: "https://github.com/Franciscode7", 
      imagenUrl: img3, 
    }
  ];

  return (
    <section id="proyectos" className="w-full bg-slate-950 text-slate-100 py-12 pt-0">
      
      {/* Encabezado de la sección */}
      <div className="max-w-6xl mx-auto px-6 mb-0">
        <div className="flex items-center gap-3 mb-2 font-mono text-xs text-cyan-400">
          <span>01. // production_code</span>
          <div className="h-[1px] flex-1 bg-slate-800"></div>
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Proyectos Destacados
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Soluciones de software e implementaciones a la medida.
        </p>
      </div>

      {/* Contenedor de bloques a lo largo de la pantalla */}
      <div className="w-full space-y-0 md:space-y-8">
        {listaProyectos.map((proyecto, index) => {
          // Si el índice es impar, invertimos el orden visual en PC para dinamismo
          const esImpar = index % 2 !== 0;

          return (
            <div 
              key={proyecto.id} 
              className="w-full border-y border-slate-900 bg-slate-950/40 py-12"
            >
              <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                

                <div className="w-full space-y-1 md:hidden">
                    <span className="text-xs font-mono text-emerald-400 block">{proyecto.subtitulo}</span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {proyecto.titulo}
                    </h3>
                </div>

                {/* Bloque Imagen (En PC alterna izq/der según el índice) */}
                <div className={`w-full md:w-1/2 ${esImpar ? 'md:order-last' : ''}`}>
                  <a 
                    href={proyecto.linkProyecto} 
                    target="_blank" 
                    rel="noreferrer"
                    className="block overflow-hidden rounded-xl border border-slate-800 bg-slate-900 group relative shadow-2xl transition-all duration-300 hover:border-emerald-500/50"
                  >
                    {/* Overlay de color sutil que desaparece al hacer hover */}
                    <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply transition-all duration-300 group-hover:opacity-0 z-10"></div>
                    
                    {/* Imagen del proyecto */}
                    <img 
                      src={proyecto.imagenUrl} 
                      alt={proyecto.titulo}
                      className="w-full h-[220px] sm:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Badge flotante indicativo de click */}
                    <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-slate-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                      <span>Visitar sitio</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                </div>

                {/* Bloque Contenido */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="w-full space-y-1 hidden md:block">
                    <span className="text-xs font-mono text-emerald-400 block">{proyecto.subtitulo}</span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {proyecto.titulo}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed bg-slate-900/60 border border-slate-900 p-5 rounded-xl shadow-inner">
                    {proyecto.descripcion}
                  </p>

                  {/* Etiquetas del Stack (DaisyUI badges con colores rígidos) */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {proyecto.stack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enlace secundario en texto por accesibilidad */}
                  <div className="pt-2">
                    <a 
                      href={proyecto.linkProyecto}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <span>Explore codebase</span>
                      <span>→</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}