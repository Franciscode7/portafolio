import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './views/Hero';
import Projects from './views/Projects';
import PersonalProjects from './views/Personal';

export default function App() {
  return (
    <BrowserRouter>
      {/* Contenedor Base de la Aplicación (Fuerza el Modo Oscuro Rígido) */}
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
        
        {/* Aquí puedes meter un Navbar global más adelante si lo necesitas */}

        <Routes>
          {/* Tu Portafolio montado directamente en la Ruta Raíz */}
          <Route 
            path="/" 
            element={
              <div className="space-y-20 pb-20">
                {/* Primer Bloque: Presentación y Conexiones */}
                <Hero />
                
                {/* Los siguientes componentes se acoplarán aquí abajo limpiamente: */}
                {/* <ProyectosSoftware /> */}
                {/* <Infraestructura /> */}
                {/* <Skills /> */}
                <Projects />
                <PersonalProjects />
              </div>
            } 
          />

          {/* Rutas secundarias para los experimentos */}
          <Route path="/laberinto" element={<div className="p-8 font-mono text-cyan-400">~/laberinto_en_desarrollo</div>} />
        </Routes>

        {/* Aquí puedes meter un Footer global más adelante */}
        
      </div>
    </BrowserRouter>
  );
}