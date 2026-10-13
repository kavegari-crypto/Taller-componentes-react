import "./Card.css";

function Card({ material, categoria, costo }) {
  return (
    <article className="card">
      <div className="card-icon">
        <span>👽</span>
      </div>

      <div className="card-content">
        <p className="card-category">{categoria}</p>

        <h2>{material}</h2>

        <div className="card-cost">
          <span>Costo estimado</span>
          <strong>
            {costo.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
              maximumFractionDigits: 0,
            })}
          </strong>
        </div>
      </div>
    </article>
  );
}

export default Card;