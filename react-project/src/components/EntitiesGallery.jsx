import EntityCard from './EntityCard'
import entities from '../data/entities.json'
import heroImage from '../assets/hero.png'
import imageImage from '../assets/image.png'
import reactLogo from '../assets/react.svg'

const imageByFileName = {
  'hero.png': heroImage,
  'image.png': imageImage,
  'react.svg': reactLogo,
}

const EntitiesGallery = () => {
  return (
    <section className="entities-gallery" aria-labelledby="entities-title">
      <h2 id="entities-title">Entidades participantes</h2>
      <div className="entities-gallery__grid">
        {entities.map((entity) => (
          <EntityCard
            key={entity.id}
            nome={entity.nome}
            imagem={imageByFileName[entity.imagem] ?? heroImage}
            descricao={entity.descricao}
            dataHora={entity.dataHora}
          />
        ))}
      </div>
    </section>
  )
}

export default EntitiesGallery

