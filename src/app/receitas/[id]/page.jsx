"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Filme() {
  const params = useParams();
  const [receita, setReceita] = useState();

  useEffect(() => {
    const receitaEncontrada = dados.find((f) => f.id == params.id);
    setReceita(receitaEncontrada);
  }, []);

  return (
    <main className="main-detalhe">
      {filme && (
        <div className="detalhe-container">
          <div className="detalhe-img-wrap">
            <img src={receita.imagem} alt={receita.titulo} />
          </div>
          <div className="detalhe-info">
            <h1 className="detalhe-titulo">{receita.titulo}</h1>
            <ul className="detalhe-lista">
              <li><strong>Ano:</strong> {receita.ano}</li>
              <li><strong>Gênero:</strong> {receita.genero}</li>
            </ul>
            <p className="detalhe-sinopse">{receita.sinopse}</p>
          </div>
        </div>
      )}
    </main>
  );
}