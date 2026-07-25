import React, { useState } from 'react';
import ProxmoxCliSim from './Cli'; // Ajusta la ruta a tu CLI
import Carrousel from './Carrousel'; // Ajusta la ruta a tu Carrusel

const HomelabMedia = ({imagenes = [], titulo, id }) => {
  // Estado para alternar entre la CLI y las imágenes
  const [mostrarCli, setMostrarCli] = useState(true);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl transition-all duration-300 hover:border-emerald-500/50 relative">
      
      {/* Condicional para renderizar CLI o Carrusel */}
      {mostrarCli ? (
        <ProxmoxCliSim />
      ) : (
        <Carrousel
          imagenes={imagenes} // O proyecto.imagenes según tu JSON
          titulo={titulo}
          id={id}
        />
      )}

      {/* Botón flotante estilizado para alternar la vista */}
      <div className="p-2 bg-slate-950/80 backdrop-blur-md border-t border-slate-800 flex justify-center">
        <button 
          onClick={() => setMostrarCli(!mostrarCli)}
          className="btn btn-xs sm:btn-sm btn-primary font-mono text-xs flex items-center gap-2 my-1"
        >
          {mostrarCli ? (
            <>
              <span>🖼️ Ver imágenes</span>
            </>
          ) : (
            <>
              <span>💻 Probar CLI</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};

export default HomelabMedia;