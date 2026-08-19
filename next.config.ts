import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Teto de memoria do Turbopack (em bytes). Sem isso o Turbopack cresce
    // sem limite no `next dev` e satura a RAM, travando a maquina. 2 GB e
    // mais que suficiente para este site. Aplica-se ao dev e ao build.
    turbopackMemoryLimit: 2 * 1024 * 1024 * 1024,
  },

  images: {
    // AVIF primeiro, WebP como queda. A ordem importa: o Next usa o primeiro
    // formato do array que o Accept do navegador aceitar.
    formats: ["image/avif", "image/webp"],
    // Obrigatorio a partir do Next 16 — sem a lista, qualquer `quality` na
    // URL do otimizador seria aceita. 75 e o padrao e o unico que o site usa.
    qualities: [75],
  },

  // Cabecalhos de seguranca. Peso pequeno em ranking, custo zero, e evitam
  // que o site seja embutido em iframe de terceiro ou que o navegador
  // adivinhe content-type.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
