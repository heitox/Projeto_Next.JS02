"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import dados from "@/dados.json";

export default function Filme() {
  const params = useParams();
  const [filme, setFilme] = useState();

  useEffect(() => {
    const filmeEncontrado = dados.find((f) => f.id == params.id);
    setFilme(filmeEncontrado);
  }, []);

  return (
    <main className="main-detalhe">
      {filme && (
        <div className="detalhe-container">
          <div className="detalhe-img-wrap">
            <img src={filme.imagem} alt={filme.titulo} />
          </div>
          <div className="detalhe-info">
            <h1 className="detalhe-titulo">{filme.titulo}</h1>
            <ul className="detalhe-lista">
              <li><strong>Ano:</strong> {filme.ano}</li>
              <li><strong>Gênero:</strong> {filme.genero}</li>
            </ul>
            <p className="detalhe-sinopse">{filme.sinopse}</p>
          </div>
        </div>
      )}
    </main>
  );
}