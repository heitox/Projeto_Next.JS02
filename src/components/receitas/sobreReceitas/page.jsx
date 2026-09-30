import "@/components/receitas/sobreReceitas/cardSobreReceitas.css";

export default function CardReceitas({
  name,
  image,
  ingredients,
  instructions,
  difficulty,
  cuisine,
  caloriesPerServing,
  prepTimeMinutes,
  cookTimeMinutes,
  servings,
}) {
  return (
    <div className="main-detalhe">
      <div className="detalhe-container">
        <div className="detalhe-img-wrap">
          <img src={image} alt={name} />
        </div>

        <div className="detalhe-info">
          <h3 className="detalhe-titulo">{name}</h3>

          <ul className="detalhe-lista">
            <li>
              <strong>Dificuldade:</strong> {difficulty}
            </li>
            <li>
              <strong>Cozinha:</strong> {cuisine}
            </li>
            <li>
              <strong>Kcal:</strong> {caloriesPerServing}
            </li>
          </ul>

          <ul className="detalhe-lista">
            <li>
              <strong>Preparo:</strong> {prepTimeMinutes} min
            </li>
            <li>
              <strong>Cozimento:</strong> {cookTimeMinutes} min
            </li>
            <li>
              <strong>Porções:</strong> {servings}
            </li>
          </ul>

          <p className="detalhe-sinopse">
            <strong className="title-ingre">Ingredientes:</strong>{" "}
            {ingredients?.join(", ")}
          </p>
          <p className="detalhe-sinopse">
            <strong className="title-ingre">Modo de preparo:</strong>{" "}
            {instructions?.join(" ")}
          </p>
        </div>
      </div>
    </div>
  );
}
