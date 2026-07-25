import data from '../assets/data/data.json';
import React, { useState } from 'react';
import ProxmoxCliSim from '../components/Cli'
import Carrousel from '../components/Carrousel'
import HomelabMedia from '../components/HomelabMedia'


const listaProyectos = data.personales;

export default function PersonalProjects() {

  return (
    <section id="proyectos" className="w-full bg-slate-950 text-slate-100 py-10">
      
      {/* Encabezado de la sección */}
      <div className="max-w-6xl mx-auto px-6 mb-0">
        <div className="flex items-center gap-3 mb-2 font-mono text-[14px] md:text-lg text-cyan-400">
          <span>02. // experiment_code</span>
          <div className="h-[1px] flex-1 bg-slate-800"></div>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Proyectos personales y experimentales
        </h2>
        <p className="text-sm text-slate-400 my-1 md:mb-6">
          Desarrollos de software y experimentos que reflejan mi curiosidad técnica y capacidad de innovación.
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
              className="w-full border-slate-900 bg-slate-950/40 py-4 pt-10 border-b"
            >
              <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                
              <div className="w-full space-y-1 md:hidden">
                <h3 className="text-2xl font-bold text-white text-center tracking-tight pb-2">
                  {proyecto.titulo}
                </h3>
                <span className="text-xs font-mono text-emerald-400 block">{proyecto.subtitulo}</span>
              </div> 

                {/* Bloque Imagen (En PC alterna izq/der según el índice) */}
                {/* Bloque Imagen o CLI (En PC alterna izq/der según el índice) */}
              <div className={`w-full md:w-1/2 ${esImpar ? 'md:order-last' : ''}`}>
                  {proyecto.id === 2 ? (
                  /* 1. CLI interactiva para el Homelab (ID 2) */
                  <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl transition-all duration-300 hover:border-emerald-500/50">
                    <HomelabMedia 
                      imagenes={proyecto.imagenUrl} // Arreglo de rutas en tu JSON
                      titulo={proyecto.titulo}
                      id={proyecto.id}
                    />
                  </div>
                 
                  ) : proyecto.id === 1 || proyecto.id === 4  ? (
                      /* Renderizado de la CLI interactiva sin tag <a> alrededor para permitir clics */
                      <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl transition-all duration-300 hover:border-emerald-500/50">
                          <Carrousel
                            imagenes={proyecto.imagenUrl} // Arreglo de rutas en tu JSON
                            titulo={proyecto.titulo}
                            id={proyecto.id}
                          />
                      </div>
                      
                  ) : (
                      /* Renderizado habitual para las imágenes normales */
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
                              className={`w-full h-[220px] sm:h-[320px] object-cover transition-transform duration-500 ${
                              proyecto.id === 1 ? "group-hover:scale-115" : "group-hover:scale-105"
                              }`}
                          />

                          <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-slate-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                              <span>{proyecto.id === 1 ? "Explorar repositorio" : "Visitar sitio"}</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                          </div>
                      </a>
                  )}
              </div>

                {/* Bloque Contenido */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="w-full space-y-1 hidden md:block">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {proyecto.titulo}
                    </h3>
                    <span className="text-xs font-mono text-emerald-400 block">{proyecto.subtitulo}</span>
                    
                  </div>

                  <p className="text-sm text-justify text-slate-400 leading-relaxed bg-slate-900/60 border border-slate-900 p-5 rounded-xl shadow-inner">
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
                      href={proyecto.fuente}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-s font-mono text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <span>{proyecto.id === 2}Explorar repositorio</span>
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