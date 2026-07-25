import React, { useState } from 'react';
import { Eraser, Terminal, Play, RotateCcw } from 'lucide-react'; // O los íconos que utilices

const ProxmoxCliSim = () => {
  const [history, setHistory] = useState([
    {
      command: 'help',
      output: 
      `---Comandos disponibles:
<b>fastfetch</b>  : Muestra información del sistema
<b>pctlist</b>    : Lista los contenedores LXC
<b>uptime</b>     : Tiempo de actividad del nodo
<b>config(ID)</b> : Ver la información del nodo
<b>clear</b>      : Limpia la consola`
    }
  ]);
  
  const [inputVal, setInputVal] = useState('');

  // Comandos predefinidos
  const commandResponses = {
    fastfetch: `<b>root@pacodev</b>
------------------
<b>OS:</b> Proxmox VE 9.1.9 x86_64
<b>Host:</b> HP EliteDesk 705 G4 SFF (DBXEnabled)
<b>Kernel:</b> Linux 6.17.13-3-pve
<b>Uptime:</b> 8 days, 21 hours, 23 mins
<b>Packages:</b> 747 (dpkg)
<b>Shell:</b> bash 5.2.37
<b>Terminal:</b> termproxy
<b>CPU:</b> AMD Ryzen 7 PRO 2700 (16) @ 3.20 GHz
<b>GPU:</b> AMD Radeon R7 200 Series [Discrete]
<b>Memory:</b> 7.61 GiB / 11.61 GiB (66%)
<b>Swap:</b> 413.30 MiB / 7.68 GiB (5%)
<b>Disk (/):</b> 14.23 GiB / 67.80 GiB (21%) - ext4
<b>Local IP (vmbr0):</b> 192.168.3.100/24
<b>Locale:</b> en_US.UTF-8`,

                  
    pctlist: `VMID        Status        Name                
100        running        ollama
101        running        adAguard  
102        running        CT102 (Jellyfin)   
103        running        downloader   
104        stopped        red-server 
105        stopped        linux-mint  `,

    uptime: ` 10:42:15 up 14 days,  6:12,  1 user,  load average: 0.18, 0.22, 0.19`,


    help: `---Comandos disponibles:
<b>fastfetch</b> : Muestra información del sistema
<b>pctlist</b>   : Lista los contenedores LXC
<b>uptime</b>    : Tiempo de actividad del nodo
<b>clear</b>     : Limpia la consola`,

config100:`consola`

  };

  const executeCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();

    if (cleanCmd === 'clear') {
      setHistory([]);
      return;
    }

    const response = commandResponses[cleanCmd] || `-bash: ${cleanCmd}: command not found: . Escribe 'help' para ver comandos disponibles.`;

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal) return;
    executeCommand(inputVal);
    setInputVal('');
  };

  return (
    <div className="w-full bg-gray-300 rounded-xl overflow-hidden border border-base-content/10 shadow-2xl font-mono text-[10px] sm:text-sm">
      {/* Barra superior estilo MacOS/Linux */}
      <div className="bg-gray-800 px-4 py-2.5 flex items-center justify-between border-b border-base-content/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-error"></div>
          <div className="w-3 h-3 rounded-full bg-warning"></div>
          <div className="w-3 h-3 rounded-full bg-success"></div>
          <span className="ml-2 text-xs opacity-60 flex items-center gap-1 font-sans font-medium">
            <Terminal className="w-3.5 h-3.5" />bash
          </span>
        </div>

        {/* Acceso rápido a comandos con badges de DaisyUI */}
        <div className="hidden sm:flex gap-1">
          {['help','fastfetch', 'pctlist', 'uptime'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="badge badge-sm badge-outline hover:badge-primary cursor-pointer transition-all gap-1 width-[50px]"
            >
              <Play className="w-2.5 h-2.5" /> {cmd}
            </button>
          ))}
          <button
            onClick={() => executeCommand('clear')}
            className="badge badge-sm badge-ghost hover:badge-error cursor-pointer"
            title="Limpiar consola"
          >
            <Eraser className="w-2.5 h-2.5" />
          </button>
        </div>
      </div>

      {/* Salida de la Terminal (Scrollable) */}
      <div className="p-4 h-[220px] sm:h-[300px] overflow-y-auto bg-neutral text-neutral-content space-y-3">
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2 text-primary font-bold">
              <span>root@pacodev:~#</span>
              <span className="text-neutral-content font-normal">{item.command}</span>
            </div>
            <pre className="whitespace-pre-wrap text-success/90 leading-relaxed pl-2 border-l-2 border-base-content/10"
              dangerouslySetInnerHTML={{ __html: item.output }}>
            </pre>
          </div>
        ))}

        {/* Prompt Interactivo */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
          <span className="text-primary font-bold">root@pacodev:~#</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="escribe 'help'..."
            className="bg-transparent outline-none flex-1 text-neutral-content placeholder:text-neutral-content/30 focus:ring-0"
          />
        </form>
      </div>
    </div>
  );
};

export default ProxmoxCliSim;