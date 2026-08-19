import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Teto de memoria do Turbopack (em bytes). Sem isso o Turbopack cresce
    // sem limite no `next dev` e satura a RAM, travando a maquina. 2 GB e
    // mais que suficiente para este site. Aplica-se ao dev e ao build.
    turbopackMemoryLimit: 2 * 1024 * 1024 * 1024,
  },
};

export default nextConfig;
