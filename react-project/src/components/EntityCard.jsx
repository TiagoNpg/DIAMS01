const EntityCard = ({ nome, imagem, descricao, dataHora }) => {
  return (
    <article className="entity-card">
      <img className="entity-card__image" src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <p className="entity-card__date">Participacao: {dataHora}</p>
    </article>
  )
}

export default EntityCard

