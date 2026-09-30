"use client";
import SobreReceitas from "@/components/receitas/sobreReceitas/page";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Receita() {
  const params = useParams();
  const [receita, setReceita] = useState(null);
  const [msgErro, setMsgErro] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${params.id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Receita não encontrada");
        return res.json();
      })
      .then((data) => setReceita(data))
      .catch((err) => setMsgErro(err.message));
  }, [params.id]);

  if (msgErro) return <p>Erro: {msgErro}</p>;
  if (!receita) return <p>Carregando...</p>;

  return (
    <main>
      <SobreReceitas
        id={receita.id}
        name={receita.name}
        image={receita.image}
        ingredients={receita.ingredients}
        instructions={receita.instructions}
        difficulty={receita.difficulty}
        cuisine={receita.cuisine}
        caloriesPerServing={receita.caloriesPerServing}
        prepTimeMinutes={receita.prepTimeMinutes}
        cookTimeMinutes={receita.cookTimeMinutes}
        servings={receita.servings}
      />
    </main>
  );
}
