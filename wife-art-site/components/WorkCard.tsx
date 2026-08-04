import Image from "next/image";
import type { Artwork } from "@/lib/artworks";

export default function WorkCard({ obra }: { obra: Artwork }) {
  return (
    <article className={`obra ${obra.destaque ? "destaque" : ""}`}>
      <div className="obra-frame">
        {/* Troque pela foto real em /public/obras — até lá, mostramos este aviso */}
        {obra.imagem ? (
          <Image
            src={obra.imagem}
            alt={obra.titulo}
            width={1200}
            height={1500}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            priority={obra.destaque}
          />
        ) : (
          <div className="obra-frame vazio">Foto pendente — {obra.slug}</div>
        )}
      </div>
      <div className="placa">
        <div className="placa-titulo">{obra.titulo}, {obra.ano}</div>
        <div className="placa-meta">
          {obra.tecnica}<br />
          {obra.dimensoes}
        </div>
        {obra.disponivel !== undefined && (
          <span className={`placa-status ${obra.disponivel ? "disponivel" : ""}`}>
            {obra.disponivel ? "Disponível" : "Vendida"}
          </span>
        )}
      </div>
    </article>
  );
}
