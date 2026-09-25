"use client";
import CardReceitas from "@/components/receitas/page";
import { useState, useEffect } from "react";

export default function Usuarios() {
  const [listaReceitas, setListaReceitas] = useState([]);
  const [msgErro, setMsgErro] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=67")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setListaReceitas(data.recipes);
        setMsgErro("");
      })
      .catch((erro) => setMsgErro(erro.message));
  }, []);

  return (
    <main>
      <h1>RECEITAS</h1>
      {msgErro != "" && <p>Erro: {msgErro}</p>}

      {listaReceitas.length > 0 ? (
        <div className="container-receitas">
          {listaReceitas.map((receita) => (
            <CardReceitas
              key={receita.id}
              id={receita.id}
              image={receita.image}
              name={receita.name}
            />
          ))}
        </div>
      ) : (
        <div>Sem receitas no momento!! tente mais tarde...</div>
      )}
    </main>
  );
}
