// ============================================================
// TODAS as pinturas do site vêm daqui. Para adicionar uma obra:
// 1. Coloque a foto em /public/obras/ (ex: nome-da-obra.jpg)
// 2. Copie um bloco abaixo e preencha os campos
// 3. Salve — o site atualiza sozinho
// ============================================================

export type Artwork = {
  slug: string;        // usado na URL, sem espaços/acentos
  titulo: string;
  ano: string;
  tecnica: string;      // ex: "Óleo sobre tela"
  dimensoes: string;    // ex: "60 × 80 cm"
  imagem: string;       // caminho em /public
  destaque?: boolean;   // true = aparece maior na home
  disponivel?: boolean; // true = mostra "disponível", false = "vendida" / omite
};

export const artista = {
  nome: "Zi Moreira",
  bio: "Escreva aqui, em 2 a 4 frases, quem é a artista, de onde vem e o que guia o seu trabalho. Esse texto aparece na página Sobre.",
  email: "zimoreira.com",
  instagram: "https://instagram.com/",
};

export const obras: Artwork[] = [
  {
    slug: "obra-1",
    titulo: "Título da obra 1",
    ano: "2024",
    tecnica: "Óleo sobre tela",
    dimensoes: "60 × 80 cm",
    imagem: "/obras/obra-1.jpg",
    destaque: true,
    disponivel: true,
  },
  {
    slug: "obra-2",
    titulo: "Título da obra 2",
    ano: "2024",
    tecnica: "Acrílica sobre tela",
    dimensoes: "50 × 70 cm",
    imagem: "/obras/obra-2.jpg",
    disponivel: true,
  },
  {
    slug: "obra-3",
    titulo: "Título da obra 3",
    ano: "2023",
    tecnica: "Óleo sobre madeira",
    dimensoes: "40 × 40 cm",
    imagem: "/obras/obra-3.jpg",
    disponivel: false,
  },
  {
    slug: "obra-4",
    titulo: "Título da obra 4",
    ano: "2023",
    tecnica: "Aquarela sobre papel",
    dimensoes: "30 × 40 cm",
    imagem: "/obras/obra-4.jpg",
    disponivel: true,
  },
];
