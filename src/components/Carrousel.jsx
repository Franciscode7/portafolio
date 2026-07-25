import React, { useState, useEffect } from 'react';

const Carrousel= ({ imagenes = [], titulo, id }) => {
  const [indexActual, setIndexActual] = useState(0);

  useEffect(() => {
    // Si no hay imágenes o solo hay 1, no hace falta el temporizador
    if (!imagenes || imagenes.length <= 1) return;

    const interval = setInterval(() => {
      setIndexActual((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 5000);

    // Limpiamos el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [imagenes]);

  if (!imagenes || imagenes.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 group relative shadow-2xl transition-all duration-300 hover:border-emerald-500/50">
      
      {/* Overlay de color sutil que desaparece al hacer hover */}
      <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply transition-all duration-300 group-hover:opacity-0 z-10 pointer-events-none"></div>

      {/* Renderizado de las imágenes con transición de opacidad */}
      <div className="relative w-full h-[220px] sm:h-[320px]">
        {imagenes.map((imgUrl, idx) => (
          <img
            key={idx}
            src={imgUrl}
            alt={`${titulo} - ${idx + 1}`}
            className={`absolute inset-0 w-full h-[220px] sm:h-[320px] object-cover transition-all duration-700 ${
              idx === indexActual ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } ${
              id === 1 ? 'group-hover:scale-115' : 'group-hover:scale-105'
            }`}
          />
        ))}
      </div>

      {/* Indicadores de bolitas (Dots) en la esquina inferior */}
      {imagenes.length > 1 && (
        <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-slate-800/80">
          {imagenes.map((_, idx) => (
            <span
              key={idx}
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                idx === indexActual
                  ? 'w-4 bg-emerald-400'
                  : 'w-1.5 bg-slate-600'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carrousel;