"use client";
import { useEffect, useState } from "react";
import dados from "@/dados.json";

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);
  
  useEffect(() => {
    setFilmes(dados);
  }, []);

  return (
    <main className="main-filmes">
      <h1 className="titulo-pagina">Listagem de todos os filmes</h1>
      {filmes.length > 0 && (
        <div className="container-filmes">
          {filmes.map((f) => {
            return (
              <div key={f.id} className="wrap-filme">
                <div className="imagem-container">
                  <img src={f.imagem} alt={f.titulo} />
                </div>
                <h3 className="filme-titulo">{f.titulo}</h3>
                <a href={`/filmes/${f.id}`} className="btn-saiba-mais">
                  Saiba Mais...
                </a>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}