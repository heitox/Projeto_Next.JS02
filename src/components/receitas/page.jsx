import "@/components/receitas/cardReceitas.css"

export default function CardReceitas({id, name, image}) {
    return(
        <main className="main-receitas">
        <div className="container-receitas">
              <div key={id} className="wrap-receita">
                <div className="imagem-container">
                  <img src={image} alt={name} />
                </div>
                <h3 className="receita-titulo">{name}</h3>
                <a href={id} className="btn-saiba-mais">
                  Saiba Mais...
                </a>
              </div>
        </div>
    </main>
  );
}

