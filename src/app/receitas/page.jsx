"use client";
import CardReceitas from "@/components/receitas/page.jsx";
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
        <div className="Receitas-grid">
          {listaReceitas.map((receitas) => {
            return (
              <CardReceitas
                key={receitas.id}
                image={receitas.image}
                firstName={receitas.name}
                link={receitas.link}
              />
            );
          })}
        </div>
      ) : (
        <div>Sem receitas no momento!! tente mais tarde...</div>
      )}
    </main>
  );
}
