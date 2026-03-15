import heroImg from '../assets/image.png'

const EventIntro = () => {
  return (
    <section className="event-intro">
      <figure>
        <img src={heroImg} alt="Atleta de levantamento de peso" />
        <figcaption>PRECISAMOS DE TII BIG DAWG</figcaption>
      </figure>

      <p>
        Concurso para <strong>levantadores de peso</strong>, precisamos de voluntários para limpar,
        levar os pesos até ao recinto e a oportunidade de competir ao lado destes monstros! <br />
        O evento vai se realizar dia <strong>25 de junho</strong>. <br />
        Não percas esta oportunidade para ver os melhores levantadores de peso do mundo a competir!
      </p>

      <h2>Faltam poucos dias para o evento!</h2>

      <nav>
        <a href="form.html">Formulário de Candidatura</a>
      </nav>
    </section>
  )
}

export default EventIntro
