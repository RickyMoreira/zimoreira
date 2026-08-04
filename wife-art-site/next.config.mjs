/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Como as obras podem ser adicionadas depois em /public/obras,
    // deixamos a otimização de imagem padrão do Next/Vercel ativa.
    unoptimized: false
  }
};

export default nextConfig;
